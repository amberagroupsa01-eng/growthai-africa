// /utils/language.js
export function detectLanguage(message = "") {
  message = message.toLowerCase();
  const englishWords = ["hello", "hi", "price", "buy", "need", "how much", "i want", "i need", "looking for", "do you have", "available", "delivery", "fast"];
  const frenchWords = ["bonjour", "salut", "prix", "acheter", "besoin", "cherche", "je veux", "je voudrais", "livraison", "disponible", "combien", "merci"];
  let enScore = 0;
  let frScore = 0;
  englishWords.forEach(w => { if (message.includes(w)) enScore++; });
  frenchWords.forEach(w => { if (message.includes(w)) frScore++; });
  if (enScore > frScore) return "en";
  if (frScore > enScore) return "fr";
  if (enScore > 0 && frScore > 0) return "mix";
  return "fr"; // default
}
