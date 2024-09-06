# 📝 Projet: Développement d'une Application de Zoom-Clone

## 🎯 Objectif

Le but de ce projet, développé avec les dernières versions de Next.js et TypeScript, est de reproduire les fonctionnalités d'un outil de visioconférence populaire comme Zoom. Il permet aux utilisateurs de se connecter en toute sécurité, de créer des réunions et d'accéder à diverses fonctionnalités telles que l'enregistrement, le partage d'écran et la gestion des participants. 

## 📋 Fonctionnalités de l'application

👉 **Authentification** : Implémente des fonctionnalités d'authentification et d'autorisation avec Clerk, permettant aux utilisateurs de se connecter en toute sécurité via les réseaux sociaux ou des méthodes traditionnelles comme l'email et le mot de passe, tout en garantissant des niveaux d'accès et des permissions appropriés sur la plateforme.

👉 **Nouvelle Réunion** : Lancez rapidement une nouvelle réunion en configurant les paramètres de caméra et de microphone avant de rejoindre.

👉 **Contrôles de Réunion** : Les participants ont un contrôle total sur divers aspects de la réunion, y compris l'enregistrement, les réactions par emoji, le partage d'écran, la gestion du son, le mode muet/non muet, l'agencement en grille, la vue de la liste des participants, ainsi que la gestion individuelle des participants (épingler, rendre muet, autoriser, bloquer, etc.).

👉 **Quitter la Réunion** : Les participants peuvent quitter une réunion ou les créateurs peuvent mettre fin à la réunion pour tous les participants.

👉 **Planification de Réunions Futures** : Saisissez les détails de la réunion (date, heure) pour planifier des réunions futures, accessibles depuis la page "Réunions à venir" pour partager le lien ou démarrer immédiatement.

👉 **Liste des Réunions Passées** : Accédez à une liste des réunions précédemment tenues, avec tous les détails et métadonnées.

👉 **Visionner les Réunions Enregistrées** : Accédez aux enregistrements des réunions passées pour les revoir ou s'y référer.

👉 **Salle Personnelle** : Chaque utilisateur dispose d'une salle personnelle avec un lien de réunion unique pour des réunions instantanées, facilement partageable.

👉 **Rejoindre des Réunions via Lien** : Rejoignez facilement des réunions créées par d'autres en utilisant un lien.

👉 **Fonctionnalité Sécurisée en Temps Réel** : Toutes les interactions sur la plateforme sont sécurisées et se déroulent en temps réel, préservant la confidentialité des utilisateurs et l'intégrité des données.

👉 **Design Réactif** : Suivi des principes de design réactif pour garantir une expérience utilisateur optimale sur tous les appareils, s'adaptant aux différentes tailles d'écran et résolutions.

# Quick Start
Follow these steps to set up the project locally on your machine.

 **Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [ npm](https://www.npmjs.com/) (Node Package Manager)

📂 **Cloning the Repository**
```bash
git clone https://github.com/AminaAhllal/Zoom-Clone.git
cd Zoom-Clone
```

🛠️**Installation**
Installez les dépendances du projet en utilisant npm :
```bash
npm install
```
⚙️**Configuration des Variables d'Environnement**
Créez un nouveau fichier nommé .env à la racine de votre projet et ajoutez le contenu suivant :
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```
Remplacez les valeurs de remplacement par vos identifiants réels Clerk et GetStream. Vous pouvez obtenir ces identifiants en vous inscrivant sur le site web de [Clerk](https://clerk.com/) et de [Getstream](https://getstream.io/).

# ⏩**Avant de lancer le projet**

Pour bénéficier des dernières fonctionnalités et corrections de bugs, il est recommandé de rester à jour avec les versions les plus récentes du projet. Assurez-vous d'exécuter les commandes suivantes pour mettre à jour le projet avant de le lancer :
```bash
npm i next@latest
```
## **🔍 Visualiser le Projet**

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser le projet.

## **🔗 Liens**

Les ressources publiques utilisées dans le projet peuvent être trouvées [ici](https://drive.google.com/file/d/1ofTpWii_sCIdJ14uQ431xWVXpYgjtQ8Q/view).

# **🛠️ Processus de Création de l'App Zoom Clone**
1 - Creer un dossier sous le nom Zoom-Clone.

2 - Accédez au site [Shadcn/ui](https://ui.shadcn.com/docs/installation/next),copier la commande suivant et remplacer (my-app) par ./:
```bash
npx create-next-app@latest my-app --typescript --tailwing --eslint 
```
3 - Pour initialiser le projet avec Shadcn UI utilisez la commande:
```bash
npx shadcn-ui@latest init
```

# Intégration du SDK vidéo GetStream

Ce guide décrit les étapes pour intégrer le SDK vidéo GetStream dans votre projet React, permettant la création et la gestion d'appels vidéo.


## 1. Inscription à GetStream et clés API

1. **Inscrivez-vous** : [GetStream.io](https://getstream.io/)  
   Créez un compte pour accéder aux clés API.

2. **Obtenez les clés API** :  
   Allez dans **Tableau de bord** > **Application de production** pour trouver vos clés API :
   - **Clé API publique**
   - **Clé secrète**

3. **Ajoutez les clés API dans `.env`** :
   Créez un fichier `.env` à la racine de votre projet et ajoutez les clés :

   ```bash
   NEXT_PUBLIC_STREAM_API_KEY=your_api_public_key
   STREAM_SECRET_KEY=your_secret_key

## 2. Installation

Installez les packages nécessaires pour les opérations côté client et côté serveur.

### Installer le SDK vidéo React GetStream

Avec **yarn** :

```bash
yarn add @stream-io/video-react-sdk
```

Ou avec npm :

```bash
npm install @stream-io/video-react-sdk
```

### Installer le SDK Node GetStream
Pour les opérations côté serveur, installez le SDK Node GetStream :

```bash
npm install @stream-io/node-sdk
```

## 3. Configuration du client
- Créer un fournisseur de client Stream
- Créez un dossier nommé providers à la racine de votre projet.
- À l'intérieur du dossier providers, créez un fichier nommé StreamClientProvider.tsx.
- Configurez le StreamClientProvider en utilisant les clés API de votre fichier .env

## 4. Client côté serveur
- Créez un dossier nommé actions, et à l'intérieur, ajoutez un fichier Stream.actions.ts pour gérer les opérations côté serveur, notamment la création d'utilisateurs et de jetons utilisateurs [creatToken](https://getstream.io/video/docs/api/#creating-users-and-user-tokens).

## 5. Créer une réunion
- Pour créer une nouvelle réunion (appel vidéo), encapsulez votre application entière dans le composant StreamVideoProvider. Ensuite, créez une fonction createMeeting pour initialiser l'appel [creatacall](https://getstream.io/video/docs/api/#creating-a-call)

## 6. Récupérer les appels par ID
- Pour récupérer un appel par son ID, créez un hook personnalisé useGetCallById qui filtre les appels en fonction de l'ID donné 

## 7. Emballer votre application
Assurez-vous d'encapsuler votre application entière dans le StreamClientProvider pour garantir l'accès au client Stream dans toute votre application.

```bash

import { StreamClientProvider } from './providers/StreamClientProvider';

function MyApp({ Component, pageProps }) {
  return (
    <StreamClientProvider>
      <Component {...pageProps} />
    </StreamClientProvider>
  );
}

export default MyApp;


```