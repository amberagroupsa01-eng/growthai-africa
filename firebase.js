// /core/firebase.js — GrowthAI Africa avec secteurs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

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

// ─── CLIENTS PME ──────────────────────────────────────────
export async function saveClient(clientId, data) {
  await setDoc(doc(db, "clients", clientId), {
    id: clientId,
    name: data.name || "",
    business: data.business || "",
    sector: data.sector || "default",
    sector_label: data.sector_label || "",
    phone: data.phone || "",
    city: data.city || "Yaoundé",
    plan: data.plan || "Basic",
    language: data.language || "fr",
    status: data.status || "trial",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }, { merge: true });
}

export async function getClient(clientId) {
  const snap = await getDoc(doc(db, "clients", clientId));
  return snap.exists() ? snap.data() : null;
}

export async function updateClientSector(clientId, sector) {
  await updateDoc(doc(db, "clients", clientId), {
    sector, updated_at: new Date().toISOString()
  });
}

// ─── CONVERSATIONS ────────────────────────────────────────
export async function saveConversation(userId, state) {
  await setDoc(doc(db, "conversations", userId), {
    user_id: userId,
    name: state.name || "",
    language: state.language || "fr",
    sector: state.sector || "default",
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
  const snap = await getDoc(doc(db, "conversations", userId));
  return snap.exists() ? snap.data() : null;
}

// ─── LEADS ────────────────────────────────────────────────
export async function saveLead(userId, data) {
  await setDoc(doc(db, "leads", userId), {
    user_id: userId,
    status: data.lead_status || "COLD",
    score: data.score || 0,
    sector: data.sector || "default",
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
    ...updates, updated_at: new Date().toISOString()
  });
}

export async function getLeadsBySector(sector) {
  const q = query(collection(db, "leads"), where("sector", "==", sector));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

// ─── MESSAGES ─────────────────────────────────────────────
export async function saveMessage(conversationId, text, sender = "bot") {
  await addDoc(collection(db, "messages"), {
    conversation_id: conversationId,
    text, sender,
    created_at: new Date().toISOString()
  });
}

// ─── VENTES ───────────────────────────────────────────────
export async function saveSale(userId, amount, product, sector = "default") {
  await addDoc(collection(db, "sales"), {
    user_id: userId, amount, product, sector,
    created_at: new Date().toISOString()
  });
  await updateLead(userId, { status: "converted" });
}

export async function getSalesBySector(sector) {
  const q = query(collection(db, "sales"), where("sector", "==", sector));
  const snap = await getDocs(q);
  const sales = snap.docs.map(d => d.data());
  const total = sales.reduce((sum, s) => sum + (s.amount || 0), 0);
  return { total, count: sales.length, sales };
}
