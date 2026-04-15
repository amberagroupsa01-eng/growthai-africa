// /core/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Configuration Firebase — remplacez avec vos vraies clés
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "VOTRE_ID",
  appId: "VOTRE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ─── CONVERSATIONS ───────────────────────────────────────
export async function saveConversation(userId, state) {
  await setDoc(doc(db, "conversations", userId), {
    user_id: userId,
    name: state.name || "",
    language: state.language || "fr",
    stage: state.stage || "greeting",
    last_intent: state.last_intent || "",
    score: state.score || 0,
    lead_status: state.lead_status || "COLD",
    updated_at: new Date().toISOString()
  }, { merge: true });
}

export async function getConversation(userId) {
  const docRef = doc(db, "conversations", userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
}

// ─── MESSAGES ────────────────────────────────────────────
export async function saveMessage(conversationId, text, sender = "bot") {
  await addDoc(collection(db, "messages"), {
    conversation_id: conversationId,
    text,
    sender, // "bot" or "user"
    created_at: new Date().toISOString()
  });
}

export function listenMessages(conversationId, callback) {
  const q = query(
    collection(db, "messages"),
    where("conversation_id", "==", conversationId),
    orderBy("created_at", "asc")
  );
  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map(d => d.data());
    callback(msgs);
  });
}

// ─── LEADS ───────────────────────────────────────────────
export async function saveLead(userId, data) {
  await setDoc(doc(db, "leads", userId), {
    user_id: userId,
    status: data.lead_status || "COLD",
    score: data.score || 0,
    language: data.language || "fr",
    stage: data.stage || "greeting",
    platform: data.platform || "facebook",
    created_at: data.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString()
  }, { merge: true });
}

export async function updateLead(leadId, updates) {
  await updateDoc(doc(db, "leads", leadId), {
    ...updates,
    updated_at: new Date().toISOString()
  });
}

// ─── INTERACTIONS ─────────────────────────────────────────
export async function saveInteraction(leadId, messageSent, responseReceived) {
  await addDoc(collection(db, "interactions"), {
    lead_id: leadId,
    message_sent: messageSent,
    response_received: responseReceived,
    status: "replied",
    created_at: new Date().toISOString()
  });
}

// ─── KEYWORDS ─────────────────────────────────────────────
export async function getKeywords(sector = null) {
  let q = collection(db, "keywords");
  if (sector) {
    q = query(q, where("sector", "==", sector));
  }
  const snapshot = await getDoc(q);
  return snapshot.docs.map(d => d.data());
}
