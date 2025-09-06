# Prefrontal Corporate Portfolio Website

Welcome to the repository for your portfolio website, built with Next.js. This guide will walk you through deploying the website to Vercel.

## Getting Started

The project is structured as a standard Next.js application. All the code is located in this directory.

-   **`app/`**: Contains all the pages of your site.
-   **`components/`**: Contains reusable components like the Header and Footer.
-   **`data/`**: Holds the data for your research projects. You can edit `research.ts` to add or change projects.

## Deployment to Vercel

The easiest way to deploy this Next.js application is with **Vercel**, the creators of Next.js. They offer a generous free tier.

### Step 1: Push to a GitHub Repository

1.  **Create a new repository on GitHub:** Go to [GitHub](https://github.com/new) and create a new repository. You can name it `prefrontal-corporate-site`.
2.  **Initialize Git and push the code:** If you haven't already, navigate to the `portfolio-site` directory in your terminal and run the following commands. Replace `<your-github-username>` and `<your-repo-name>` with your details.

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
    git push -u origin main
    ```

### Step 2: Deploy with Vercel

1.  **Sign up for Vercel:** Go to [Vercel](https://vercel.com/signup) and sign up with your GitHub account.
2.  **Import Your Project:**
    -   After signing up, you will be taken to your dashboard. Click **"Add New... -> Project"**.
    -   Select the GitHub repository you just created.
    -   Vercel will automatically detect that it's a Next.js project and configure all the build settings for you. There is no need to change anything.
3.  **Deploy:** Click the **"Deploy"** button. Vercel will build and deploy your site. This may take a minute or two.

Once deployed, Vercel will give you a free `.vercel.app` domain where you can view your live site.

### Step 3: Connect Your Custom Domain (`prefrontalcorporate.me`)

1.  **Go to Project Settings:** In your Vercel dashboard, navigate to your new project.
2.  **Add Domain:** Go to the **"Settings"** tab and then click on the **"Domains"** menu item.
3.  **Enter Your Domain:** Type `prefrontalcorporate.me` into the field and click **"Add"**. Vercel will likely recommend adding both `prefrontalcorporate.me` and `www.prefrontalcorporate.me`.
4.  **Configure DNS:** Vercel will provide you with the DNS records you need to add to Namecheap (usually an `A` record for the root domain and a `CNAME` record for the `www` subdomain).
5.  **Update Namecheap:**
    -   Log in to your Namecheap account and go to the **"Advanced DNS"** tab for your domain.
    -   Add the records provided by Vercel.
6.  **Wait for Verification:** DNS changes can take a few minutes to a few hours. Vercel will automatically verify the records and issue an SSL certificate.

Your website will then be live at `https://prefrontalcorporate.me`.

---

## Future Plans

As requested, the dynamic features (contact forms, collaboration forms, and comments) have been temporarily disabled. The plan is to re-integrate these features using a backend service like Firebase in the future, once it is within the budget. The code structure is prepared for this eventuality.

Congratulations on your new portfolio!
