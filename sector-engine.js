// ============================================
// GrowthAI Africa — Système Hybride Intelligent
// Simple aujourd'hui + Intelligent demain
// ============================================

// ─── 1. MESSAGES PAR SECTEUR ─────────────────────────────
export const MESSAGES = {

  // ── DEFAULT (tous secteurs) ──────────────────────────────
  default: {
    greeting: {
      fr: ["Bonjour 😊 comment je peux vous aider ?", "Salut 👋 vous cherchez quelque chose ?"],
      en: ["Hello 😊 how can I help you?", "Hi 👋 what are you looking for?"],
      mix: ["Hello 😊 comment puis-je vous aider today?"]
    },
    qualification: {
      fr: ["C'est pour quel usage exactement ?", "Dites-moi plus, je vais trouver ce qu'il vous faut 😊"],
      en: ["What exactly are you looking for?", "Tell me more 😊"],
      mix: ["Tell me more, qu'est-ce qu'il vous faut?"]
    },
    offer: {
      fr: ["On a exactement ce qu'il vous faut 🔥", "Bonne nouvelle — on a ça en stock ! 🎉"],
      en: ["We have exactly what you need 🔥", "Good news — we have it in stock! 🎉"],
      mix: ["On a exactly what you need 🔥"]
    },
    objection: {
      fr: ["Je comprends 😊 Mais pour ce prix, la qualité est vraiment top !", "On peut s'arranger — vous avez quel budget ?"],
      en: ["I understand 😊 But the quality is really worth it!", "We can work something out — what's your budget?"],
      mix: ["Je comprends 😊 But the quality is top!"]
    },
    closing: {
      fr: ["Le prix commence à 15 000 FCFA 😊 On valide la commande ?", "Je vous réserve ça maintenant ?"],
      en: ["Starting from 15,000 FCFA 😊 Shall I confirm?", "Do you want me to reserve it now?"],
      mix: ["From 15,000 FCFA 😊 On valide?"]
    },
    follow_up: {
      fr: ["Vous êtes toujours intéressé(e) ? 😊", "Offre spéciale aujourd'hui 🎁 -10% si vous commandez maintenant !"],
      en: ["Still interested? 😊", "Special offer today 🎁 -10% if you order now!"],
      mix: ["Still interested? Offre spéciale 🎁 -10%!"]
    }
  },

  // ── MODE & VÊTEMENTS ─────────────────────────────────────
  mode: {
    greeting: {
      fr: ["Bonjour ! 👗 Bienvenue dans notre boutique. Vous cherchez quoi aujourd'hui ?", "Salut 😊 Robe, chaussure, ou accessoire ? On a tout !"],
      en: ["Hello! 👗 Welcome to our store. What are you looking for today?", "Hi 😊 Dress, shoes, or accessories? We have it all!"],
      mix: ["Hello! 👗 Vous cherchez quoi today?"]
    },
    qualification: {
      fr: ["C'est pour vous ou pour offrir ? 🎁", "Vous avez une taille en tête ? S, M, L, XL... on a tout 😊", "C'est pour quelle occasion — soirée, bureau, décontracté ?"],
      en: ["Is this for you or a gift? 🎁", "What size are you looking for? We have everything 😊", "What's the occasion — evening, office, casual?"],
      mix: ["C'est pour you ou pour offrir? 🎁"]
    },
    offer: {
      fr: ["On a exactement ce modèle ! 🔥 Disponible en 3 couleurs", "Bonne nouvelle — nouvelle collection arrivée cette semaine 🎉", "Ce modèle est un bestseller — beaucoup de clients l'adorent 💕"],
      en: ["We have exactly that model! 🔥 Available in 3 colors", "Good news — new collection just arrived this week 🎉", "This model is a bestseller — many customers love it 💕"],
      mix: ["On a exactement ça 🔥 Disponible in 3 colors!"]
    },
    objection: {
      fr: ["Je comprends 😊 Mais cette qualité à ce prix, c'est rare à Yaoundé !", "On a aussi des modèles à partir de 8 000 FCFA si vous voulez voir ?", "La qualité est garantie — si vous n'êtes pas satisfait, on échange !"],
      en: ["I understand 😊 But this quality at this price is rare!", "We also have models starting from 8,000 FCFA if you want to see?", "Quality is guaranteed — not satisfied? We exchange!"],
      mix: ["Je comprends 😊 Mais cette qualité is rare at this price!"]
    },
    closing: {
      fr: ["Ce modèle est à {price} FCFA 😊 Livraison gratuite à Yaoundé ! On valide ?", "Je vous réserve la taille {size} maintenant ? Stock limité ⚡", "Paiement MTN ou Orange Money — livraison demain 🚚"],
      en: ["This model is {price} FCFA 😊 Free delivery! Shall I confirm?", "Should I reserve size {size} now? Limited stock ⚡", "Payment MTN or Orange Money — delivery tomorrow 🚚"],
      mix: ["Ce modèle is {price} FCFA 😊 Free delivery! On valide?"]
    },
    follow_up: {
      fr: ["Bonjour ! 👗 Vous avez vu notre nouvelle collection cette semaine ?", "La robe que vous regardiez est presque en rupture 😮 Il en reste 2 !", "Offre spéciale aujourd'hui 🎁 -15% sur toute la collection"],
      en: ["Hello! 👗 Have you seen our new collection this week?", "The dress you were looking at is almost out of stock 😮 Only 2 left!", "Special offer today 🎁 -15% on the entire collection"],
      mix: ["Bonjour! 👗 New collection this week — vous avez vu?"]
    }
  },

  // ── BEAUTÉ & COSMÉTIQUES ─────────────────────────────────
  beaute: {
    greeting: {
      fr: ["Bonjour belle ! 💄 Vous cherchez quoi aujourd'hui — maquillage, soin ou parfum ?", "Salut 😊 On a les meilleures marques de beauté à Yaoundé. Je vous aide ?"],
      en: ["Hello beautiful! 💄 What are you looking for — makeup, skincare, or perfume?", "Hi 😊 We have the best beauty brands. Can I help you?"],
      mix: ["Bonjour! 💄 Makeup, soin, ou parfum today?"]
    },
    qualification: {
      fr: ["C'est pour quel type de peau — normale, grasse, sèche ou mixte ?", "Vous cherchez une marque précise ou je vous conseille quelque chose ?", "C'est pour usage quotidien ou occasion spéciale ?"],
      en: ["What skin type — normal, oily, dry, or combination?", "Are you looking for a specific brand or would you like a recommendation?", "Is this for daily use or a special occasion?"],
      mix: ["Quel type de skin — normal, oily, dry?"]
    },
    offer: {
      fr: ["J'ai exactement ce qu'il vous faut 💆‍♀️ C'est un soin très populaire chez nous", "On a reçu une nouvelle gamme cette semaine — parfaite pour votre peau ✨", "Ce produit est naturel, sans produits chimiques — beaucoup de clientes adorent 💕"],
      en: ["I have exactly what you need 💆‍♀️ It's our most popular skincare", "We received a new range this week — perfect for your skin ✨", "This product is natural, chemical-free — many customers love it 💕"],
      mix: ["J'ai exactly what you need 💆‍♀️ Very popular chez nous!"]
    },
    objection: {
      fr: ["Je comprends 😊 Mais ce produit dure 3 mois — c'est très rentable !", "On a aussi une version moins chère qui donne de bons résultats 😊", "C'est un investissement pour votre peau — les résultats se voient en 2 semaines !"],
      en: ["I understand 😊 But this product lasts 3 months — great value!", "We also have a more affordable version with great results 😊", "It's an investment for your skin — results visible in 2 weeks!"],
      mix: ["Je comprends 😊 But it lasts 3 months — great value!"]
    },
    closing: {
      fr: ["Ce soin est à {price} FCFA — livraison gratuite Yaoundé 🚚 On valide ?", "Je vous prépare le colis maintenant ? Paiement MTN ou Orange Money 📱", "Offre du moment : {price} FCFA au lieu de {old_price} FCFA ! On valide ?"],
      en: ["This skincare is {price} FCFA — free delivery 🚚 Shall I confirm?", "Should I prepare your package now? Payment MTN or Orange Money 📱", "Current offer: {price} FCFA instead of {old_price} FCFA! Shall I confirm?"],
      mix: ["Ce soin is {price} FCFA — free delivery! On valide?"]
    },
    follow_up: {
      fr: ["Bonjour 💄 Vous avez essayé le produit dont on avait parlé ?", "On a reçu le soin naturel que vous cherchiez 😊 Il est arrivé !", "Promo spéciale aujourd'hui 🎁 -20% sur tous les soins du visage"],
      en: ["Hello 💄 Have you tried the product we talked about?", "The natural skincare you were looking for has arrived 😊", "Special promo today 🎁 -20% on all face care products"],
      mix: ["Bonjour 💄 The product you wanted has arrived! Promo -20%"]
    }
  },

  // ── RESTAURANT & RESTAURATION ────────────────────────────
  resto: {
    greeting: {
      fr: ["Bonjour ! 🍽️ Vous souhaitez commander ou réserver une table ?", "Salut 😊 On a de bons plats chauds disponibles maintenant. Vous voulez voir le menu ?"],
      en: ["Hello! 🍽️ Would you like to order or book a table?", "Hi 😊 We have great hot dishes available now. Want to see the menu?"],
      mix: ["Bonjour! 🍽️ Commander ou réserver today?"]
    },
    qualification: {
      fr: ["C'est pour combien de personnes ?", "Vous préférez livraison ou venez manger sur place ?", "Vous avez des préférences — poulet, poisson, bœuf, végétarien ?"],
      en: ["How many people is this for?", "Would you prefer delivery or dining in?", "Any preferences — chicken, fish, beef, vegetarian?"],
      mix: ["C'est pour combien de personnes?"]
    },
    offer: {
      fr: ["On a un poulet braisé délicieux à {price} FCFA 🍗 avec riz ou plantain !", "Menu du jour : {dish} à {price} FCFA — livraison 30 min ⚡", "Le plat du chef aujourd'hui c'est {dish} — très demandé ! 😋"],
      en: ["We have delicious grilled chicken at {price} FCFA 🍗 with rice or plantain!", "Today's menu: {dish} at {price} FCFA — 30 min delivery ⚡", "Chef's special today is {dish} — very popular! 😋"],
      mix: ["On a un délicieux {dish} at {price} FCFA 🍗 avec rice ou plantain!"]
    },
    objection: {
      fr: ["Je comprends 😊 On fait aussi des portions à 1 500 FCFA pour petits budgets !", "La livraison est gratuite à partir de 3 000 FCFA de commande 😊", "La qualité est top — beaucoup de clients commandent tous les jours !"],
      en: ["I understand 😊 We also have portions at 1,500 FCFA for small budgets!", "Free delivery from 3,000 FCFA orders 😊", "Quality is top — many customers order every day!"],
      mix: ["Je comprends 😊 On a aussi portions at 1,500 FCFA!"]
    },
    closing: {
      fr: ["Je valide votre commande de {dish} × {qty} pour {price} FCFA ? 🍽️", "Adresse de livraison ? On arrive en 30 min ⚡", "Paiement MTN ou Orange Money — commande confirmée 📱"],
      en: ["Shall I confirm your order of {dish} × {qty} for {price} FCFA? 🍽️", "Delivery address? We'll be there in 30 min ⚡", "Payment MTN or Orange Money — order confirmed 📱"],
      mix: ["Je valide {dish} × {qty} for {price} FCFA? 🍽️"]
    },
    follow_up: {
      fr: ["Bonjour ! 🍽️ Le menu du jour vous tente ? {dish} à {price} FCFA", "C'est l'heure du déjeuner 😊 Vous commandez quoi aujourd'hui ?", "Spécial vendredi 🎁 2 plats achetés = 1 boisson offerte !"],
      en: ["Hello! 🍽️ Interested in today's menu? {dish} at {price} FCFA", "It's lunchtime 😊 What are you ordering today?", "Friday special 🎁 Buy 2 dishes = 1 free drink!"],
      mix: ["Bonjour! 🍽️ Menu du jour — {dish} at {price} FCFA today!"]
    }
  },

  // ── AUTOMOBILE ───────────────────────────────────────────
  automobile: {
    greeting: {
      fr: ["Bonjour ! 🚗 Vous cherchez un véhicule, une pièce ou un service auto ?", "Salut 😊 Achat, vente ou réparation ? Je vous oriente !"],
      en: ["Hello! 🚗 Are you looking for a vehicle, part, or auto service?", "Hi 😊 Buying, selling, or repairs? Let me help you!"],
      mix: ["Hello! 🚗 Vehicle, pièce, ou service auto today?"]
    },
    qualification: {
      fr: ["Vous cherchez quel type de véhicule — berline, SUV, pick-up ?", "C'est pour quelle marque — Toyota, Mercedes, Peugeot... ?", "Vous avez quel budget approximatif ?"],
      en: ["What type of vehicle — sedan, SUV, pickup?", "Which brand — Toyota, Mercedes, Peugeot...?", "What's your approximate budget?"],
      mix: ["Quel type de vehicle — berline, SUV, pick-up?"]
    },
    offer: {
      fr: ["On a exactement ce modèle en stock ! 🚗 Kilométrage : {km} km", "Bonne nouvelle — véhicule importé directement, prix imbattable 💪", "Ce modèle est très fiable — beaucoup de propriétaires satisfaits 👍"],
      en: ["We have exactly that model in stock! 🚗 Mileage: {km} km", "Good news — directly imported vehicle, unbeatable price 💪", "This model is very reliable — many satisfied owners 👍"],
      mix: ["On a exactly ce modèle! 🚗 Mileage: {km} km — prix imbattable!"]
    },
    objection: {
      fr: ["Je comprends 😊 Mais ce prix inclut la garantie et le contrôle technique !", "On peut faire un paiement en plusieurs fois si vous voulez 😊", "Ce véhicule a été inspecté — aucun problème mécanique garanti !"],
      en: ["I understand 😊 But this price includes warranty and technical inspection!", "We can do installment payment if you'd like 😊", "This vehicle has been inspected — no mechanical issues guaranteed!"],
      mix: ["Je comprends 😊 But this price includes garantie et inspection!"]
    },
    closing: {
      fr: ["Ce véhicule est à {price} FCFA 😊 On peut organiser un essai routier ?", "Je bloque ce véhicule pour vous maintenant ? Stock limité ⚡", "Paiement comptant ou en plusieurs fois ? On s'adapte 😊"],
      en: ["This vehicle is {price} FCFA 😊 Shall we organize a test drive?", "Should I reserve this vehicle for you now? Limited stock ⚡", "Cash payment or installments? We adapt 😊"],
      mix: ["Ce vehicle is {price} FCFA 😊 Test drive possible?"]
    },
    follow_up: {
      fr: ["Bonjour ! 🚗 Le véhicule dont on avait parlé est toujours disponible !", "Nouveaux arrivages cette semaine 😊 Vous venez voir ?", "Offre spéciale : révision complète offerte pour tout achat ce mois-ci 🎁"],
      en: ["Hello! 🚗 The vehicle we discussed is still available!", "New arrivals this week 😊 Would you like to come see?", "Special offer: free full service with any purchase this month 🎁"],
      mix: ["Bonjour! 🚗 Le vehicle dont on avait parlé is still available!"]
    }
  },

  // ── TÉLÉPHONIE & HIGH-TECH ───────────────────────────────
  tech: {
    greeting: {
      fr: ["Bonjour ! 📱 Vous cherchez un téléphone, accessoire ou réparation ?", "Salut 😊 Samsung, iPhone, Tecno... on a tout ! Je vous aide ?"],
      en: ["Hello! 📱 Looking for a phone, accessory, or repair?", "Hi 😊 Samsung, iPhone, Tecno... we have it all! Can I help?"],
      mix: ["Hello! 📱 Phone, accessoire, ou repair today?"]
    },
    qualification: {
      fr: ["Vous avez un budget en tête ? 50k, 100k, 200k FCFA ?", "C'est pour quel usage principal — photos, jeux, business ?", "Vous préférez quelle marque — Samsung, iPhone, Tecno, Itel ?"],
      en: ["Do you have a budget in mind? 50k, 100k, 200k FCFA?", "What's the main use — photos, gaming, business?", "Which brand do you prefer — Samsung, iPhone, Tecno, Itel?"],
      mix: ["Budget en tête? 50k, 100k, 200k FCFA?"]
    },
    offer: {
      fr: ["Le {model} est parfait pour vous ! 📱 {specs} — prix : {price} FCFA", "Bonne nouvelle — ce modèle vient d'arriver, neuf et scellé 🎉", "C'est le meilleur rapport qualité-prix du moment 💪 {model} à {price} FCFA"],
      en: ["The {model} is perfect for you! 📱 {specs} — price: {price} FCFA", "Good news — this model just arrived, brand new sealed 🎉", "Best value for money right now 💪 {model} at {price} FCFA"],
      mix: ["Le {model} is parfait for you! 📱 {specs} — {price} FCFA"]
    },
    objection: {
      fr: ["Je comprends 😊 On a aussi le {alt_model} à {alt_price} FCFA — presque les mêmes specs !", "On fait la reprise de votre ancien téléphone — ça réduit le prix !", "Garantie 6 mois incluse — si problème on répare ou échange 😊"],
      en: ["I understand 😊 We also have the {alt_model} at {alt_price} FCFA — almost same specs!", "We take your old phone in trade — that reduces the price!", "6-month warranty included — if issue we repair or exchange 😊"],
      mix: ["Je comprends 😊 On a aussi {alt_model} at {alt_price} FCFA!"]
    },
    closing: {
      fr: ["Le {model} est à {price} FCFA neuf et scellé 😊 On valide ?", "Livraison aujourd'hui à Yaoundé ! Paiement MTN ou Orange 📱", "Je vous réserve le dernier en stock ? Il ne reste qu'un ⚡"],
      en: ["The {model} is {price} FCFA new and sealed 😊 Shall I confirm?", "Delivery today in Yaounde! Payment MTN or Orange 📱", "Should I reserve the last one in stock? Only one left ⚡"],
      mix: ["Le {model} is {price} FCFA neuf 😊 On valide? Delivery today!"]
    },
    follow_up: {
      fr: ["Bonjour ! 📱 Le {model} dont on avait parlé est encore dispo !", "Nouveaux arrivages Samsung et iPhone cette semaine 😊", "Promo flash : {model} à {price} FCFA — seulement 48h ⚡"],
      en: ["Hello! 📱 The {model} we discussed is still available!", "New Samsung and iPhone arrivals this week 😊", "Flash sale: {model} at {price} FCFA — only 48 hours ⚡"],
      mix: ["Bonjour! 📱 Le {model} is still available! Promo this week!"]
    }
  },

  // ── SALON DE COIFFURE ────────────────────────────────────
  coiffure: {
    greeting: {
      fr: ["Bonjour ! 💇‍♀️ Vous souhaitez prendre rendez-vous ou renseignements ?", "Salut 😊 Tresses, perruques, lissage ou coupe ? On fait tout !"],
      en: ["Hello! 💇‍♀️ Would you like to book an appointment or get info?", "Hi 😊 Braids, wigs, relaxer, or cut? We do it all!"],
      mix: ["Hello! 💇‍♀️ Appointment ou renseignements today?"]
    },
    qualification: {
      fr: ["Vous cherchez quoi comme coiffure — tresses, perruque, lissage ?", "C'est pour quand — aujourd'hui, cette semaine ?", "Vous avez les cheveux naturels ou traités ?"],
      en: ["What hairstyle — braids, wig, relaxer?", "When is this for — today, this week?", "Are your hair natural or treated?"],
      mix: ["Quel type de coiffure — tresses, perruque, lissage?"]
    },
    offer: {
      fr: ["On fait exactement ça 💇‍♀️ Nos coiffeuses sont expertes !", "On a des rendez-vous disponibles dès {time} aujourd'hui !", "Ce style est très tendance en ce moment — vous allez adorer 💕"],
      en: ["We do exactly that 💇‍♀️ Our stylists are experts!", "We have appointments available from {time} today!", "This style is very trendy right now — you'll love it 💕"],
      mix: ["On fait exactly ça 💇‍♀️ Available dès {time} today!"]
    },
    objection: {
      fr: ["Je comprends 😊 On a des tarifs pour tous les budgets — à partir de 3 000 FCFA !", "On peut étaler le paiement si vous le souhaitez 😊", "La qualité est garantie — si vous n'êtes pas satisfaite, on refait !"],
      en: ["I understand 😊 We have prices for all budgets — from 3,000 FCFA!", "We can split the payment if you'd like 😊", "Quality guaranteed — not satisfied? We redo it!"],
      mix: ["Je comprends 😊 On a prices for all budgets — from 3,000 FCFA!"]
    },
    closing: {
      fr: ["Je vous réserve un rendez-vous {day} à {time} ? C'est à {price} FCFA 😊", "Nom pour la réservation ? On confirme par WhatsApp ✅", "Parfait ! Rendez-vous confirmé {day} à {time} chez nous 💇‍♀️"],
      en: ["Shall I book you for {day} at {time}? It's {price} FCFA 😊", "Name for the booking? We'll confirm by WhatsApp ✅", "Perfect! Appointment confirmed for {day} at {time} 💇‍♀️"],
      mix: ["Je vous réserve {day} at {time} — {price} FCFA? 😊"]
    },
    follow_up: {
      fr: ["Bonjour 💇‍♀️ On vous attend toujours ! Disponible {day} à {time}", "Nouvelle promo cette semaine : tresses complètes à {price} FCFA 🎁", "Votre rendez-vous est demain à {time} — on vous attend ! 😊"],
      en: ["Hello 💇‍♀️ We're still waiting for you! Available {day} at {time}", "New promo this week: full braids at {price} FCFA 🎁", "Your appointment is tomorrow at {time} — we're expecting you! 😊"],
      mix: ["Bonjour 💇‍♀️ Available {day} at {time} — promo cette semaine!"]
    }
  }
};

// ─── 2. LISTE DES SECTEURS ────────────────────────────────
export const SECTORS = {
  mode:      { label: "Mode & Vêtements",       icon: "👗", keywords: ["robe","chaussure","vêtement","mode","taille","tissu","pagne","sac","ceinture","dress","shoes","bag","clothes"] },
  beaute:    { label: "Beauté & Cosmétiques",    icon: "💄", keywords: ["perruque","maquillage","soin","crème","parfum","beauté","cosmétique","lèvres","wig","makeup","skincare","perfume","cream"] },
  resto:     { label: "Restaurant & Food",       icon: "🍽️", keywords: ["poulet","plat","manger","commander","livraison","menu","nourriture","braisé","pizza","riz","food","order","delivery","meal"] },
  automobile:{ label: "Automobile & Moto",       icon: "🚗", keywords: ["voiture","véhicule","moto","moteur","pièce","auto","carrosserie","pneu","toyota","mercedes","car","vehicle","engine","motor"] },
  tech:      { label: "Téléphonie & High-Tech",  icon: "📱", keywords: ["téléphone","samsung","iphone","android","écran","batterie","chargeur","phone","smartphone","laptop","ordinateur","tablette"] },
  coiffure:  { label: "Salon de Coiffure",       icon: "💇‍♀️", keywords: ["coiffure","tresse","perruque","lissage","coupe","rendez-vous","salon","cheveux","braids","hair","relaxer","appointment"] }
};

// ─── 3. FONCTION PRINCIPALE — getMessage() ────────────────
/**
 * Retourne un message aléatoire selon le secteur et l'étape
 * @param {string} sector  - "mode" | "beaute" | "resto" | "automobile" | "tech" | "coiffure" | "default"
 * @param {string} step    - "greeting" | "qualification" | "offer" | "objection" | "closing" | "follow_up"
 * @param {string} lang    - "fr" | "en" | "mix"
 * @param {object} data    - données dynamiques { price, dish, model, etc. }
 * @returns {string} - message formaté
 */
export function getMessage(sector = "default", step = "greeting", lang = "fr", data = {}) {
  // Charger les messages du secteur ou fallback sur default
  const sectorMessages = MESSAGES[sector] || MESSAGES.default;
  const stepMessages = sectorMessages[step] || MESSAGES.default[step] || {};
  const langMessages = stepMessages[lang] || stepMessages.fr || ["Je suis là pour vous aider 😊"];

  // Sélectionner un message aléatoire
  const raw = langMessages[Math.floor(Math.random() * langMessages.length)];

  // Injecter les données dynamiques
  return injectData(raw, data);
}

// ─── 4. INJECTION DE DONNÉES DYNAMIQUES ──────────────────
/**
 * Remplace les variables {key} dans un message
 * @param {string} message
 * @param {object} data
 */
export function injectData(message, data = {}) {
  return message
    .replace(/{price}/g,     data.price     || "15 000")
    .replace(/{old_price}/g, data.old_price || "20 000")
    .replace(/{dish}/g,      data.dish      || "Poulet braisé")
    .replace(/{model}/g,     data.model     || "Samsung S23")
    .replace(/{specs}/g,     data.specs     || "128GB, 6GB RAM")
    .replace(/{alt_model}/g, data.alt_model || "Samsung A54")
    .replace(/{alt_price}/g, data.alt_price || "120 000")
    .replace(/{km}/g,        data.km        || "45 000")
    .replace(/{size}/g,      data.size      || "M")
    .replace(/{qty}/g,       data.qty       || "1")
    .replace(/{day}/g,       data.day       || "demain")
    .replace(/{time}/g,      data.time      || "10h00");
}

// ─── 5. DÉTECTION AUTOMATIQUE DU SECTEUR (PLACEHOLDER) ───
/**
 * ⚠️ FONCTION PRÉPARÉE — pas encore activée
 * Détecte le secteur probable à partir du message
 * @param {string} message
 * @returns {string|null} - secteur détecté ou null si incertain
 */
export function detectSector(message = "") {
  message = message.toLowerCase();
  let scores = {};

  // Calculer un score par secteur
  for (const [sector, config] of Object.entries(SECTORS)) {
    scores[sector] = 0;
    config.keywords.forEach(keyword => {
      if (message.includes(keyword)) scores[sector]++;
    });
  }

  // Trouver le secteur avec le score le plus élevé
  const best = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);

  // Retourner seulement si score >= 2 (éviter faux positifs)
  return best[1] >= 2 ? best[0] : null;
}

// ─── 6. GESTIONNAIRE DE SECTEUR ──────────────────────────
/**
 * Classe principale pour gérer le secteur d'un client
 */
export class SectorManager {
  constructor() {
    this.currentSector = localStorage.getItem('growthai_sector') || 'default';
  }

  // Définir le secteur manuellement (lors de l'inscription)
  setSector(sector) {
    if (SECTORS[sector] || sector === 'default') {
      this.currentSector = sector;
      localStorage.setItem('growthai_sector', sector);
      return true;
    }
    return false;
  }

  // Obtenir le secteur actuel
  getSector() {
    return this.currentSector;
  }

  // Obtenir les infos du secteur
  getSectorInfo() {
    return SECTORS[this.currentSector] || { label: "Général", icon: "🏪" };
  }

  // ⚠️ FUTUR: suggérer un secteur basé sur le message
  // (pas encore activé — utiliser setSector() pour l'instant)
  suggestSector(message) {
    const detected = detectSector(message);
    if (detected && detected !== this.currentSector) {
      // Pour l'instant on retourne juste la suggestion sans changer
      console.log(`💡 Secteur suggéré: ${detected} (actuel: ${this.currentSector})`);
      return detected;
    }
    return null;
  }

  // Récupérer un message pour ce secteur
  getMessage(step, lang = "fr", data = {}) {
    return getMessage(this.currentSector, step, lang, data);
  }
}

// ─── 7. EXEMPLE COMPLET — SECTEUR AUTOMOBILE ─────────────
/**
 * Exemple d'utilisation complète pour le secteur automobile
 */
export function exempleAutomobile() {
  const manager = new SectorManager();
  manager.setSector("automobile");

  // Simulation d'une conversation
  const conversation = [
    {
      client: "Bonjour, je cherche une Toyota Corolla",
      bot: manager.getMessage("greeting", "fr"),
      intent: "greeting"
    },
    {
      client: "Budget environ 5 000 000 FCFA",
      bot: manager.getMessage("qualification", "fr"),
      intent: "qualification"
    },
    {
      client: "Vous en avez en stock ?",
      bot: manager.getMessage("offer", "fr", { model: "Toyota Corolla", km: "32 000", price: "4 800 000" }),
      intent: "offer"
    },
    {
      client: "C'est un peu cher",
      bot: manager.getMessage("objection", "fr"),
      intent: "objection"
    },
    {
      client: "OK je suis intéressé",
      bot: manager.getMessage("closing", "fr", { price: "4 800 000" }),
      intent: "closing"
    }
  ];

  return conversation;
}

// ─── 8. FLOW CONVERSATION PAR SECTEUR ────────────────────
export const CONVERSATION_FLOW = {
  greeting:      { next: "qualification", score_min: 0  },
  qualification: { next: "offer",         score_min: 3  },
  offer:         { next: "closing",       score_min: 6  },
  objection:     { next: "offer",         score_min: 4  }, // retour à l'offre
  closing:       { next: "follow_up",     score_min: 8  },
  follow_up:     { next: "follow_up",     score_min: 10 }
};

export function getNextStep(currentStep, score) {
  const flow = CONVERSATION_FLOW[currentStep];
  if (!flow) return "greeting";
  if (score >= flow.score_min) return flow.next;
  return currentStep; // rester à l'étape actuelle si score insuffisant
}
