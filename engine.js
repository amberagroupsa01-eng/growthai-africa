// /core/engine.js
import { detectLanguage } from "../utils/language.js";
import { detectIntent, calculateScore, filterLead } from "../utils/intent.js";
import { getMessage, applyStyle, personalize, injectData, decideNextStep } from "../utils/conversation.js";

export function processMessage(state = {}, userMessage = "") {
  // 1. Detect language
  const lang = detectLanguage(userMessage);
  // 2. Detect intent
  const intent = detectIntent(userMessage);
  // 3. Calculate score
  const score = calculateScore(userMessage);
  // 4. Filter lead
  const leadStatus = filterLead(score);
  // 5. Decide next step
  const nextStep = decideNextStep(intent);
  // 6. Get message
  let reply = getMessage(nextStep, lang);
  // 7. Apply local style
  reply = applyStyle(reply, lang);
  // 8. Personalize with name
  reply = personalize(reply, state.name);
  // 9. Inject dynamic data
  reply = injectData(reply, {
    city: state.city || "Yaoundé",
    price: state.price,
    price_min: state.price_min,
    price_max: state.price_max
  });

  return {
    reply,
    newState: {
      ...state,
      language: lang,
      stage: nextStep,
      last_intent: intent,
      score,
      lead_status: leadStatus,
      updated_at: new Date().toISOString()
    }
  };
}

export function autoFollowUp(lead, sendMessage) {
  // Relance après 6h
  setTimeout(() => {
    const lang = lead.language || "fr";
    const msg6h = lang === "fr"
      ? "Bonjour 😊 vous êtes toujours intéressé(e) ? On garde votre commande disponible !"
      : lang === "en"
      ? "Hello 😊 are you still interested? We're keeping it available for you!"
      : "Hello 😊 vous êtes still interested? On a ça pour vous!";
    sendMessage(lead.user_id, msg6h);
  }, 6 * 60 * 60 * 1000); // 6 heures

  // Relance après 24h avec offre spéciale
  setTimeout(() => {
    const lang = lead.language || "fr";
    const msg24h = lang === "fr"
      ? "Bonjour 🎁 offre spéciale pour vous aujourd'hui ! -10% si vous commandez maintenant. Intéressé(e) ?"
      : lang === "en"
      ? "Hello 🎁 special offer just for you today! -10% if you order now. Interested?"
      : "Hello 🎁 special offer aujourd'hui! -10% now. Interested? 😊";
    sendMessage(lead.user_id, msg24h);
  }, 24 * 60 * 60 * 1000); // 24 heures
}

export function markAsConverted(lead_id, updateLead) {
  updateLead(lead_id, {
    status: "converted",
    converted_at: new Date().toISOString()
  });
}
