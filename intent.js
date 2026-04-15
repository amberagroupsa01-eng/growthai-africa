// /utils/intent.js
import { keywords } from "../data/styles.js";

export function detectIntent(message = "") {
  message = message.toLowerCase();
  // Prix = closing intent
  const priceWords = ["prix", "price", "combien", "how much", "tarif", "cost", "ça coûte", "what's the price"];
  if (priceWords.some(w => message.includes(w))) return "closing";
  // Achat direct = closing
  const buyWords = ["acheter", "buy", "commander", "order", "je prends", "i'll take", "je veux commander"];
  if (buyWords.some(w => message.includes(w))) return "closing";
  // Livraison = delivery
  const deliveryWords = ["livraison", "delivery", "livrer", "deliver", "envoyer", "send", "yaoundé", "douala"];
  if (deliveryWords.some(w => message.includes(w))) return "delivery";
  // Paiement = payment
  const paymentWords = ["paiement", "payment", "payer", "pay", "mtn", "orange money", "wave"];
  if (paymentWords.some(w => message.includes(w))) return "payment";
  // Recherche produit = qualification
  const searchWords = ["cherche", "need", "looking for", "veux", "want", "besoin", "disponible", "available", "vous avez", "do you have"];
  if (searchWords.some(w => message.includes(w))) return "qualification";
  // Salutation = greeting
  const greetWords = ["bonjour", "hello", "hi", "salut", "bonsoir", "good morning", "good evening"];
  if (greetWords.some(w => message.includes(w))) return "greeting";
  return "not_understood";
}

export function calculateScore(message = "") {
  message = message.toLowerCase();
  let score = 0;
  // Intent keywords (+5)
  const intentWords = ["je cherche", "je veux", "i need", "i want", "looking for", "besoin de"];
  intentWords.forEach(w => { if (message.includes(w)) score += 5; });
  // Product keywords (+3)
  const productWords = ["robe", "chaussure", "perruque", "sac", "téléphone", "dress", "shoes", "wig", "bag", "phone", "cosmétique", "poulet", "pizza"];
  productWords.forEach(w => { if (message.includes(w)) score += 3; });
  // Problem keywords (+2)
  const problemWords = ["urgent", "vite", "rapidement", "asap", "today", "aujourd'hui", "maintenant"];
  problemWords.forEach(w => { if (message.includes(w)) score += 2; });
  // Location keywords (+2)
  const locationWords = ["yaoundé", "douala", "bafoussam", "bamenda", "livraison", "delivery"];
  locationWords.forEach(w => { if (message.includes(w)) score += 2; });
  // Price interest (+1)
  const priceWords = ["prix", "price", "combien", "how much"];
  priceWords.forEach(w => { if (message.includes(w)) score += 1; });
  return score;
}

export function filterLead(score) {
  if (score >= 8) return "HOT";
  if (score >= 5) return "WARM";
  return "COLD";
}
