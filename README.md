# 📝 Project: Zoom-Clone Application Development

## 🎯 Objective

The goal of this project, developed with the latest versions of Next.js and TypeScript, is to deploy the functionalities of a popular video conferencing tool like Zoom. It allows users to securely sign in, create meetings, and access various features such as recording, screen sharing, and participant management.

## 📋 Application Features

👉 **Authentication**: Implements authentication and authorization features with Clerk, allowing users to securely sign in via social networks or traditional methods like email and password, while ensuring appropriate levels of access and permissions on the platform.

👉 **New Meeting**: Quickly launch a new meeting by configuring camera and microphone settings before joining.

👉 **Meeting Controls**: Participants have full control over various aspects of the meeting, including recording, emoji reactions, screen sharing, sound management, mute/unmute, grid layout, participant list view, and individual participant management (pin, mute, allow, block, etc.).

👉 **Leave Meeting**: Participants can leave a meeting, or creators can end the meeting for all participants.

👉 **Schedule Future Meetings**: Enter meeting details (date, time) to schedule future meetings, accessible from the "Upcoming Meetings" page to share the link or start immediately.

👉 **Past Meetings List**: Access a list of previously held meetings, with all details and metadata.

👉 **View Recorded Meetings**: Access recordings of past meetings for review or reference.

👉 **Personal Room**: Each user has a personal room with a unique meeting link for instant meetings, easily shareable.

👉 **Join Meetings via Link**: Easily join meetings created by others using a link.

👉 **Secure Real-Time Functionality**: All interactions on the platform are secure and happen in real-time, preserving user privacy and data integrity.

👉 **Responsive Design**: Follows responsive design principles to ensure an optimal user experience on all devices, adapting to different screen sizes and resolutions.

## 🛠️ Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### 📂 Cloning the Repository

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

## 📜**Sheet**
Étend le composant Dialog pour afficher du contenu qui complète le contenu principal de l'écran.

**Installation**
```bash
npx shadcnui-@latestadd sheet
```

# 🔑Intégration du Clerk:

# 1 **Installer @clerk/nextjs**
```bash
npm install @clerk/nextjs
```

# 2 ⚙️ Environment Variables Configuration

Ajoutez les clés suivantes à votre fichier **.env Vous pouvez toujours retrouver ces clés sur la page des clés API de votre tableau de bord Clerk.
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

# 3 **🛠️ Ajouter un Middleware à votre Application**
- Créer un Fichier Middleware

- Créez un fichier nommé **middleware.ts** à la racine de votre projet.

- Exporter le Middleware de Clerk

- Dans votre fichier middleware.ts, exportez l'assistant clerkMiddleware() de Clerk :
```bash
  import { clerkMiddleware } from '@clerk/nextjs/server'

  export default clerkMiddleware()

  export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
```

# **Sign into clerk account**
- Go to [Clerk](https://clerk.com/)
- Cliquez sur Dashboard après avoir créé votre compte.
-Cliquez sur Create application.
-Choisissez vos options de connexion et ajoutez le nom de votre application.

![Capre](https://github.com/user-attachments/assets/f1b59aaa-d386-4490-ac1c-89df6b424857)

-Ensuite, copiez vos propres variables d'environnement personnalisées.
-Allez dans le fichier middleware.ts et ajoutez :
  ```bash
  import { clerkMiddleware,createRouterMatcher } from '@clerk/nextjs/server'
  const protectedRoutes = createRouterMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings,
  '/personal-room',
  '/meeting(.*)'
  ])
  export default clerkMiddleware((auth, req)=>{
  if protectedRoutes(req)) auth().protect();
  export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    ],
  }
  ```
- Allez dans **.env** and add
  ```bash
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  ```
-  Allez dans **sign-in** folder and add a folder named **[[...sign-in]]** and add a **page.tsx** inside that forlder then add this code
  ```bash
  import { SignIn } from '@clerk/nextjs';

  export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
  }
```
- Faites la même chose pour le dossier sign-up en remplaçant SignIn par SignUp et SignInPage par SignUpPage.

# Intégration du SDK vidéo GetStream:

Ce guide décrit les étapes pour intégrer le SDK vidéo GetStream dans votre projet React, permettant la création et la gestion d'appels vidéo.


## 1. Inscription à GetStream et clés API


![Nouveau projet (2)](https://github.com/user-attachments/assets/4c63d475-93c2-4c0a-8098-375100c7bb35)



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

## 4. Server-side Client
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


