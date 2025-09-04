# Prefrontal Corporate Portfolio Website

Welcome to the repository for your portfolio website, built with Next.js and Firebase. This guide will walk you through deploying the website and connecting your custom domain.

## Getting Started

The project is structured as a standard Next.js application. All the code is located in this directory.

-   **`app/`**: Contains all the pages of your site.
-   **`components/`**: Contains reusable components like the Header, Footer, and Comments section.
-   **`data/`**: Holds the data for your research projects. You can edit `research.ts` to add or change projects.
-   **`lib/`**: Contains the Firebase initialization code.
-   **`.env.local`**: This file (which you created) holds your secret Firebase credentials. **Do not share this file or commit it to GitHub.**

## Deployment Guide

The recommended way to deploy this Next.js application is with **Firebase App Hosting**. This service will automatically build and deploy your site whenever you push changes to your GitHub repository.

### Step 1: Push to a GitHub Repository

1.  **Create a new repository on GitHub:** Go to [GitHub](https://github.com/new) and create a new repository. You can name it `prefrontal-corporate-site`. Make it a **private** repository for now if you prefer.
2.  **Initialize Git and push the code:** In your local terminal, navigate to the `portfolio-site` directory and run the following commands. Replace `<your-github-username>` and `<your-repo-name>` with your actual details.

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
    git push -u origin main
    ```

### Step 2: Connect to Firebase App Hosting

1.  **Go to the Firebase Console:** Navigate to your project in the [Firebase Console](https://console.firebase.google.com/).
2.  **Open App Hosting:** In the "Build" menu on the left, click on **App Hosting**.
3.  **Create a backend:** Click the "Create backend" button.
4.  **Connect to GitHub:** Follow the prompts to connect your GitHub account and select the repository you just created.
5.  **Deployment Settings:**
    -   Set the **Root directory** to `/`.
    -   Firebase will automatically detect that this is a Next.js app.
6.  **Deploy:** Finalize the setup. Firebase will perform the first deployment. This may take a few minutes. Once it's done, you will get a default URL (e.g., `your-app-name.web.app`).

### Step 3: Connect Your Custom Domain (`prefrontalcorporate.me`)

1.  **Go to App Hosting Settings:** In the Firebase App Hosting section of the console, find your newly created backend and click "Manage".
2.  **Add Custom Domain:** Go to the "Domains" tab and click **"Add custom domain"**.
3.  **Enter Your Domain:** Type in `prefrontalcorporate.me` and click "Continue".
4.  **Verify Ownership:** Firebase will give you a **TXT record** to prove you own the domain. It will look something like this:
    -   **Type:** `TXT`
    -   **Host/Name:** `_acme-challenge.prefrontalcorporate.me`
    -   **Value/Content:** `some-long-verification-string`
5.  **Add Records in Namecheap:**
    -   Log in to your Namecheap account.
    -   Go to your "Domain List", find `prefrontalcorporate.me`, and click "Manage".
    -   Go to the **"Advanced DNS"** tab.
    -   Click **"Add New Record"** and add the TXT record from Firebase.
    -   Firebase will also provide you with **A records** (IP addresses). Add these in Namecheap as well. Make sure to remove any other A records that might conflict.
6.  **Wait and Verify:** DNS changes can take some time to propagate (from a few minutes to a few hours). Once they do, Firebase will automatically verify your domain ownership and provision an SSL certificate for you. The status in the Firebase console will change to "Connected".

Your website will then be live at `https://prefrontalcorporate.me`.

---

This completes the setup. If you have any questions during the process, the Firebase documentation is an excellent resource. Congratulations on your new portfolio!
