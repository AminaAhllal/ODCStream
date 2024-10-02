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
 Install project dependencies using npm:
```bash
npm install
```
⚙️**Environment Variables Configuration**
Create a new file called .env in the root directory of your project and add the following:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```
Replace the placeholder values with your actual Clerk and GetStream credentials. You can obtain these by signing up on the [Clerk](https://clerk.com/)  and [Getstream](https://getstream.io/) websites.

# ⏩**Before Launching the Project**

To ensure access to the latest features and bug fixes, it is recommended to stay up to date with the project's latest versions. Run the following commands to update the project before launching:
```bash
npm i next@latest
```
## **🔍 View the Project**

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## **🔗 Resources**

Public resources used in the project can be found [here](https://drive.google.com/file/d/1ofTpWii_sCIdJ14uQ431xWVXpYgjtQ8Q/view).

# **🛠️ Zoom Clone App Creation Process**
1 - Create a folder named Zoom-Clone..

2 - Access [Shadcn/ui](https://ui.shadcn.com/docs/installation/next), copy the command below, and replace my-app with ./:
npx create-next-app@latest my-app --typescript --tailwing --eslint 
```
3 -To initialize the project with Shadcn UI, use the command:
```bash
npx shadcn-ui@latest init
```

## 📜**Sheet Component**
Extends the Dialog component to display complementary content alongside the main screen content.

**Installation**
```bash
npx shadcnui-@latestadd sheet
```

# 🔑Clerk Integration::

# 1 **Install @clerk/nextjs**
```bash
npm install @clerk/nextjs
```

# 2 ⚙️ Environment Variables Configuration

Add the following keys to your .env file. You can find these on your Clerk dashboard's API keys page.
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

# 3 **🛠️Add Middleware to Your Application**
- Create a middleware file named middleware.ts at the root of your project.

- Export the Clerk middleware helper:

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

# **Sign into Clerk**
- Go to [Clerk](https://clerk.com/)
- Click Dashboard after creating your account.
- Click Create Application.
- Choose your sign-in options and add your app name.

![Capre](https://github.com/user-attachments/assets/f1b59aaa-d386-4490-ac1c-89df6b424857)

- Copy your custom environment variables.
- In the middleware.ts  file, add:
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
- In the **.env** file, add:
  ```bash
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  ```
- For the sign-in folder, create a folder named **[[...sign-in]]**, and inside, add a file **page.tsx** with this code:
  ```bash
    import { SignIn } from '@clerk/nextjs';
    
    export default function SiginInPage() {
      return (
        <main className="flex h-screen w-full items-center justify-center">
          <SignIn />
        </main>
      );
  }```
- Do the same for the sign-up folder, replacing SignIn with SignUp and SignInPage with SignUpPage.

# GetStream Video SDK Integration:

This guide covers steps to integrate the GetStream Video SDK into your React project, enabling video calls.

- [Stream React Video SDK Docs](https://getstream.io/video/docs/react/basics/installation/)

## 1. Sign up for GetStream and API keys


![Nouveau projet (2)](https://github.com/user-attachments/assets/4c63d475-93c2-4c0a-8098-375100c7bb35)



1. **Sign Up at** : [GetStream.io](https://getstream.io/)  

2. **Find your Public API Key and Secret Key in Dashboard > Production App.I** :  
   - **Public API Key**
   - **Secret Key**

3. **Add the keys to your .env file:** :
   At the root of your project, create a new file named .env:

   ```bash
   NEXT_PUBLIC_STREAM_API_KEY=your_api_public_key
   STREAM_SECRET_KEY=your_secret_key

## 2. Installation

Install the required packages for both client and server operations.

### Client-Side React SDK Installation

Using **yarn** :

```bash
yarn add @stream-io/video-react-sdk
```

Or using npm: :

```bash
npm install @stream-io/video-react-sdk
```

### Server-Side Node SDK Installation: 
For server operations, install the GetStream Node SDK:

```bash
npm install @stream-io/node-sdk
```

## 3. Client Configuration
-Create a StreamClientProvider.
-Create a folder called providers and inside it, add a file named StreamClientProvider.tsx.
-Configure the StreamClientProvider using the API keys from your .env file.

## 4. Server-side Client
- reate a folder called actions and inside it, add a file Stream.actions.ts to handle server-side operations, such as creating users and user tokens [creatToken](https://getstream.io/video/docs/api/#creating-users-and-user-tokens).

## 5. Create a Meeting
- To create a new video call, wrap your entire app in the StreamVideoProvider component and create a createMeeting function to initiate the call [creatacall](https://getstream.io/video/docs/api/#creating-a-call)

## 6. Retrieve Calls by ID
- To retrieve a call by its ID, create a custom hook useGetCallById that filters calls by the given ID. 

## 7. Wrap Your Application 
Ensure your entire app is wrapped in the StreamClientProvider to guarantee access to the Stream client throughout your application.

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


