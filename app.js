// /app.js — Point d'entrée principal GrowthAI Africa Chat Engine

import { processMessage, autoFollowUp, markAsConverted } from "./core/engine.js";
import { saveConversation, getConversation, saveMessage, saveLead, updateLead } from "./core/firebase.js";

// ─── ÉTAT GLOBAL ─────────────────────────────────────────
let state = {
  user_id: null,
  name: null,
  language: "fr",
  stage: "greeting",
  last_intent: null,
  score: 0,
  lead_status: "COLD",
  city: "Yaoundé",
  platform: "facebook"
};

// ─── INITIALISATION ───────────────────────────────────────
export async function initChat(userId, userName = null, city = "Yaoundé", platform = "facebook") {
  state.user_id = userId;
  state.name = userName;
  state.city = city;
  state.platform = platform;

  // Charger conversation existante depuis Firebase
  const existing = await getConversation(userId);
  if (existing) {
    state = { ...state, ...existing };
    console.log("Conversation restaurée:", state.stage);
  } else {
    // Nouvelle conversation — envoyer message de bienvenue
    const result = processMessage(state, "bonjour");
    await sendBotMessage(result.reply);
    state = result.newState;
    await saveConversation(userId, state);
  }
}

// ─── TRAITEMENT MESSAGE CLIENT ────────────────────────────
export async function handleUserMessage(userMessage) {
  // 1. Sauvegarder le message client
  await saveMessage(state.user_id, userMessage, "user");

  // 2. Traiter le message
  const result = processMessage(state, userMessage);

  // 3. Mettre à jour l'état
  state = result.newState;

  // 4. Envoyer la réponse bot
  await sendBotMessage(result.reply);

  // 5. Sauvegarder la conversation
  await saveConversation(state.user_id, state);

  // 6. Sauvegarder le lead si score > 0
  if (state.score > 0) {
    await saveLead(state.user_id, state);
  }

  // 7. Notifier si HOT
  if (state.lead_status === "HOT") {
    notifyCommercial(state);
    // Configurer relance automatique si pas de réponse
    autoFollowUp(state, sendWhatsAppNotification);
  }

  return result.reply;
}

// ─── ENVOYER MESSAGE BOT ──────────────────────────────────
async function sendBotMessage(text) {
  // Sauvegarder dans Firebase
  await saveMessage(state.user_id, text, "bot");

  // Afficher dans l'UI
  displayMessage(text, "bot");

  console.log("Bot:", text);
}

// ─── AFFICHER MESSAGE UI ──────────────────────────────────
function displayMessage(text, sender = "bot") {
  const chatArea = document.getElementById("chat-area");
  if (!chatArea) return;

  const wrap = document.createElement("div");
  wrap.className = `message-wrap ${sender === "bot" ? "bot" : "user"}`;

  const bubble = document.createElement("div");
  bubble.className = `bubble ${sender === "bot" ? "bubble-bot" : "bubble-user"}`;

  if (sender === "bot") {
    const label = document.createElement("div");
    label.className = "bot-label";
    label.textContent = "🤖 GrowthAI Africa";
    bubble.appendChild(label);
  }

  const textEl = document.createElement("p");
  textEl.textContent = text;
  bubble.appendChild(textEl);

  const time = document.createElement("div");
  time.className = "msg-time";
  time.textContent = new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  bubble.appendChild(time);

  wrap.appendChild(bubble);
  chatArea.appendChild(wrap);
  chatArea.scrollTop = chatArea.scrollHeight;
}

// ─── NOTIFIER COMMERCIAL ──────────────────────────────────
function notifyCommercial(state) {
  console.log("🔴 PROSPECT HOT DÉTECTÉ !");
  console.log("User:", state.user_id);
  console.log("Score:", state.score);
  console.log("Language:", state.language);
  console.log("Stage:", state.stage);

  // Ici vous pouvez appeler votre webhook Make.com
  // fetch("VOTRE_WEBHOOK_MAKECOM", { method: "POST", body: JSON.stringify(state) });
}

// ─── NOTIFICATION WHATSAPP ────────────────────────────────
async function sendWhatsAppNotification(userId, message) {
  // Intégration UltraMsg
  const response = await fetch(`https://api.ultramsg.com/instance170166/messages/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      token: "4o7te6ydez7qd4sz",
      to: "+237678658152",
      body: `🔴 Prospect HOT: ${message}`
    })
  });
  return response.json();
}

// ─── MARQUER COMME CONVERTI ───────────────────────────────
export async function convertLead() {
  markAsConverted(state.user_id, updateLead);
  state.lead_status = "converted";
  await saveConversation(state.user_id, state);
  console.log("✅ Lead converti:", state.user_id);
}

// ─── EXEMPLE D'UTILISATION ───────────────────────────────
/*
// Initialiser le chat
await initChat("user_123", "Marie", "Yaoundé", "facebook");

// Traiter un message client
const reply = await handleUserMessage("Je cherche une robe taille M");
// Bot répond: "On a exactement ce qu'il vous faut 🔥 tranquille, on gère ça."

// Score calculé automatiquement
// HOT si score >= 8
// WARM si score >= 5
// COLD sinon

// Marquer comme vendu
await convertLead();
*/
