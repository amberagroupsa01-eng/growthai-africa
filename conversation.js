// /utils/conversation.js
import { messages } from "../data/messages.js";
import { styles } from "../data/styles.js";

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getMessage(step, lang = "fr") {
  const pool = messages[step]?.[lang] || messages[step]?.fr || ["Je suis là pour vous aider 😊"];
  return random(pool);
}

export function applyStyle(message, lang = "fr") {
  const style = styles[lang] || styles.fr;
  if (!style.expressions || !style.expressions.length) return message;
  // Apply style 40% of the time to avoid being repetitive
  if (Math.random() > 0.4) return message;
  const expr = random(style.expressions);
  return `${message} ${expr}`;
}

export function personalize(message, name) {
  if (!name) return message;
  // Only add name to greeting messages
  if (message.includes("Bonjour") || message.includes("Hello") || message.includes("Salut") || message.includes("Hi")) {
    return message.replace("Bonjour", `Bonjour ${name}`).replace("Hello", `Hello ${name}`);
  }
  return message;
}

export function injectData(message, data = {}) {
  return message
    .replace("{city}", data.city || "Yaoundé")
    .replace("{price}", data.price || "à partir de 15 000")
    .replace("{price_min}", data.price_min || "15 000")
    .replace("{price_max}", data.price_max || "80 000");
}

export function decideNextStep(intent) {
  const flow = {
    greeting: "qualification",
    qualification: "product_pitch",
    product_pitch: "closing",
    closing: "delivery",
    delivery: "payment",
    payment: "follow_up",
    follow_up: "follow_up",
    not_understood: "not_understood"
  };
  return flow[intent] || "greeting";
}
