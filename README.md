# GrowthAI Africa — Conversational Sales Engine

## Structure du projet

```
growthai-engine/
├── data/
│   ├── messages.js      # Templates messages FR/EN/Mix
│   └── styles.js        # Styles locaux + mots clés scoring
├── utils/
│   ├── language.js      # Détection langue automatique
│   ├── intent.js        # Détection intention + scoring
│   └── conversation.js  # Sélection messages + personnalisation
├── core/
│   ├── engine.js        # Moteur principal processMessage()
│   └── firebase.js      # Intégration Firestore
├── chat.html            # Interface chat complète (standalone)
└── app.js               # Point d'entrée principal
```

## Fonctionnalités

### Détection langue automatique
- Français → réponses en français
- English → réponses en anglais
- Mix (Franglais) → réponses adaptées

### Scoring des prospects
| Type | Score |
|------|-------|
| Intent (je cherche, I need) | +5 |
| Produit (robe, wig, phone) | +3 |
| Urgence (urgent, asap) | +2 |
| Localisation (Yaoundé, Douala) | +2 |
| Prix (combien, how much) | +1 |

### Filtrage leads
- **HOT** (≥8) → Notification immédiate + relance 6h/24h
- **WARM** (≥5) → Relance 6h
- **COLD** (<5) → Ignorer

### Flow de conversation
```
greeting → qualification → product_pitch → closing → delivery → payment → follow_up
```

## Utilisation

### Standalone (sans Firebase)
Ouvrez `chat.html` directement dans le navigateur.

### Avec Firebase
1. Créez un projet Firebase sur console.firebase.google.com
2. Activez Firestore
3. Remplacez la config dans `core/firebase.js`
4. Importez `app.js` dans votre HTML

### Intégration Make.com
Le moteur génère automatiquement:
- `state.lead_status` (HOT/WARM/COLD)
- `state.score` (nombre)
- `state.language` (fr/en/mix)
- `state.reply` (message à envoyer)

Envoyez ces données à votre webhook Make.com pour déclencher les notifications WhatsApp.

## Exemples

### Français
```
Client: "Je cherche une robe taille M urgente"
Score: intent(5) + product(3) + urgence(2) = 10 → HOT
Bot: "On a exactement ce qu'il vous faut 🔥 tranquille, on gère ça."
```

### English
```
Client: "I need a wig for my sister"
Score: intent(5) + product(3) = 8 → HOT
Bot: "We have exactly what you need 🔥 no worries, we got you."
```

### Mix (Franglais)
```
Client: "I need perruque urgent Yaoundé"
Score: intent(5) + product(3) + urgence(2) + location(2) = 12 → HOT
Bot: "On a exactly what you need 🔥 no worry, on gère ça."
```

## Technologies
- JavaScript Vanilla (ES6 modules)
- Firebase Firestore (base de données temps réel)
- UltraMsg API (notifications WhatsApp)
- Make.com (automatisation workflow)
- Airtable (CRM)
