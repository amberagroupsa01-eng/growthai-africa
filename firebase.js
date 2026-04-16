// /core/firebase.js — GrowthAI Africa
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, orderBy, onSnapshot, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// ✅ Configuration Firebase — GrowthAI Africa
const firebaseConfig = {
  apiKey: "AIzaSyCML1LKVPNHjHB9LyrYgpPJFdCl5epROBI",
  authDomain: "growthai-africa.firebaseapp.com",
  projectId: "growthai-africa",
  storageBucket: "growthai-africa.firebasestorage.app",
  messagingSenderId: "650020353525",
  appId: "1:650020353525:web:d4c5177bd0ba058fe79cbc"
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
    platform: state.platform || "facebook",
    city: state.city || "Yaoundé",
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
    sender,
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
    city: data.city || "Yaoundé",
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

export async function getHotLeads() {
  const q = query(collection(db, "leads"), where("status", "==", "HOT"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => d.data());
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

// ─── VENTES ──────────────────────────────────────────────
export async function saveSale(userId, amount, product) {
  await addDoc(collection(db, "sales"), {
    user_id: userId,
    amount,
    product,
    created_at: new Date().toISOString()
  });
  await updateLead(userId, { status: "converted" });
}

export async function getTotalSales() {
  const snapshot = await getDocs(collection(db, "sales"));
  const sales = snapshot.docs.map(d => d.data());
  const total = sales.reduce((sum, s) => sum + (s.amount || 0), 0);
  return { total, count: sales.length, sales };
}
