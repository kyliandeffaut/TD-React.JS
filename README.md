🧩 TP React – Partie 3 : Exercices pratiques

Projet : td-react-intro

🚀 Installation et lancement
1️⃣ Cloner ou créer le projet

Commandes à exécuter :
npm create vite@latest td-react-intro -- --template react-ts
cd td-react-intro
npm install

2️⃣ Démarrer le serveur de développement

Commande :
npm run dev

➡️ Ouvre ensuite l’URL indiquée (souvent http://localhost:5173

🧠 Étapes du TP
Étape 1 – Premier composant

Fichier : src/App.tsx

Affiche le message : Bonjour Toto, je découvre React !

Utilise une variable nom injectée dans le JSX.

Étape 2 – Gestion de l’état (useState)

Déclare un état compteur initialisé à 0.

Ajoute deux boutons :

“+” → incrémente le compteur

“Réinitialiser” → remet le compteur à 0

Le compteur s’affiche et réagit aux clics.

Étape 3 – Effet de bord (useEffect)

À chaque changement du compteur, le titre de la page (document.title) est mis à jour automatiquement.

Exemple de titre attendu : Compteur: 3

Étape 4 – Import d’un JSON

Crée un fichier src/SuperHeros.json contenant :

[
{"id":1,"name":"Batman"},
{"id":2,"name":"Superman"},
{"id":3,"name":"Wonder Woman"}
]

Importe ce fichier dans App.tsx

Affiche : Il y a 3 super-héros dans la base.

Étape 5 – Affichage dynamique

Parcours le JSON avec .map() pour afficher la liste des noms :

Batman

Superman

Wonder Woman

Bonus : ajoute un champ de recherche (input) pour filtrer la liste selon le texte saisi.

🧩 Structure du projet

td-react-intro/
├─ src/
│ ├─ App.tsx → composant principal
│ ├─ main.tsx → point d’entrée React/Vite
│ ├─ SuperHeros.json → données JSON importées
│ ├─ index.css → styles globaux
│ └─ json.d.ts → module JSON (optionnel)
├─ tsconfig.json
├─ vite.config.ts
├─ package.json
└─ README.md

🧪 Vérifications
Étape	Élément visible dans le navigateur	Validation
1	“Bonjour Toto, je découvre React !”	✅
2	Boutons “+” et “Réinitialiser” fonctionnels	✅
3	Titre de page mis à jour	✅
4	“Il y a 3 super-héros dans la base.”	✅
5	Liste et recherche dynamique	✅

🧰 Technologies utilisées

⚡ Vite – Build tool rapide pour React

⚛️ React 18 – Librairie d’interface utilisateur

💬 TypeScript – Typage statique

💅 JSX / TSX – Syntaxe de composants

🧩 Hooks : useState, useEffect

📸 Aperçu attendu

Bonjour Toto, je découvre React !
Compteur : 0 [+] [Réinitialiser]
(Le titre du navigateur change avec la valeur du compteur)
Il y a 3 super-héros dans la base.
[ Champ de recherche ]

Batman

Superman

Wonder Woman
