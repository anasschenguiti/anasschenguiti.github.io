# 🚀 Portfolio Professionnel — Anass Chenguiti

Portfolio moderne, interactif et ultra-performant conçu sur-mesure pour **Anass Chenguiti**, Élève Ingénieur d'État en **Ingénierie Informatique & Réseaux** à l'**EMSI** — **Spécialité Développement Digital & Systèmes d'Information** (Tanger, Maroc).

Profil d'excellence axé sur l'ingénierie **Full-Stack & DevOps**, les **Architectures Microservices Cloud-Native**, la **Cybersécurité (SOC)** et les **Systèmes d'Agents IA**.

---

## ✨ Points Forts & Fonctionnalités Clés

- 🌐 **Bilingue Temps Réel (Français 🇫🇷 / Anglais 🇬🇧)** : Basculement instantané de la langue sans rechargement de page avec mémorisation des préférences.
- 🎨 **Sélecteur de Thème d'Accents** : Personnalisation instantanée des reflets et bordures lumineuses (Indigo, Émeraude, Cyan, Violet).
- 🌌 **Arrière-Plan Interactif en Constellation** : Canvas HTML5 fluide qui réagit dynamiquement au survol de la souris.
- 💻 **Console Développeur Interactive (CLI)** : Un terminal interactif type Zsh avec commandes exécutables (`whoami`, `skills`, `projects`, `education`, `contact`, `clear`) et raccourcis cliquables.
- 🗂️ **Showcase de Projets Filtrables** : Tri dynamique par domaine (IA & Agents, Full-Stack & Cloud, Big Data Hadoop, DevOps, Mobile) avec fiches détaillées dans un modal interactif.
- ⚡ **Zéro Dépendance Lourde / Zéro Build** : Développé en HTML5 sémantique, Tailwind CSS (CDN), Vanilla JavaScript modulaire et Lucide Icons. Fonctionne instantanément dans n'importe quel navigateur.
- 📱 **100% Responsive & Optimisé SEO** : Compatible Mobile, Tablette, Écrans Retina 4K, métadonnées OpenGraph et typographies Google Fonts de pointe (*Plus Jakarta Sans* et *JetBrains Mono*).

---

## 📁 Architecture du Projet

```text
portfolio/
├── index.html          # Structure sémantique complète et métadonnées SEO
├── README.md           # Documentation d'utilisation et de déploiement
├── css/
│   └── style.css       # Styles personnalisés (glassmorphism, lueurs néon, animations)
└── js/
    ├── data.js         # Données centralisées (projets, compétences, bio, traductions FR/EN)
    ├── canvas.js       # Effet de particules & constellation interactive
    ├── terminal.js     # Console interactive type hacker / dev
    └── main.js         # Logique applicative, i18n, modal et gestion des thèmes
```

---

## 🛠️ Lancer en Local

Vous pouvez ouvrir `index.html` directement dans votre navigateur web, ou lancer un serveur local avec Python :

```powershell
# Depuis la racine du dossier portfolio :
python -m http.server 3000
```
Puis accédez à `http://localhost:3000` dans votre navigateur.

---

## 🚀 Déployer Gratuitement sur GitHub Pages (1 minute)

Pour avoir votre portfolio en ligne sur `https://anasschenguiti.github.io` :

1. Initialisez git et commitez vos fichiers :
   ```powershell
   git init
   git add .
   git commit -m "feat: initial release of professional portfolio"
   ```

2. Créez un dépôt sur GitHub nommé `anasschenguiti.github.io` (ou `portfolio`).

3. Liez et poussez :
   ```powershell
   git remote add origin https://github.com/anasschenguiti/anasschenguiti.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. Dans GitHub > **Settings** > **Pages**, sélectionnez la branche `main` et le dossier `/ (root)`. Votre portfolio sera immédiatement en ligne !

---

## 📝 Personnalisation Facile

- **Ajouter ou modifier des projets** : Ouvrez [js/data.js](file:///c:/Users/ansac/Documents/portfolio/js/data.js) et mettez à jour la liste `projects`.
- **Ajouter votre CV PDF** : Déposez votre fichier `cv_anass_chenguiti.pdf` à la racine et liez-le dans le bouton de téléchargement du hero header.
- **Modifier vos coordonnées** : Tout est modifiable directement dans l'objet `profile` de [js/data.js](file:///c:/Users/ansac/Documents/portfolio/js/data.js).

