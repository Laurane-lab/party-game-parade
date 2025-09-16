# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/debfce95-68fc-4522-9c0c-fbcdc1daa1c5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/debfce95-68fc-4522-9c0c-fbcdc1daa1c5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment Variables Setup

This project requires environment variables to be configured for proper functionality. Here's how to set them up:

### Required Environment Variables

- **`VITE_STRIPE_PAYMENT_LINK`**: The Stripe payment link URL for premium subscriptions
  - For testing: Use your Stripe test payment link (starts with `https://buy.stripe.com/test_`)
  - For production: Use your Stripe live payment link (starts with `https://buy.stripe.com/`)

### Setting up locally (for development)

1. Create a `.env` file in the root directory of your project
2. Add the following line:
   ```
   VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/test_your_test_payment_link_here
   ```
3. Replace `your_test_payment_link_here` with your actual Stripe test payment link

### Setting up on Vercel (for production/preview)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name**: `VITE_STRIPE_PAYMENT_LINK`
   - **Value**: Your Stripe payment link (test for preview environments, live for production)
   - **Target**: Select the appropriate environments (Preview, Production, or both)

### Getting your Stripe payment links

1. Log into your Stripe Dashboard
2. Go to **Products** → **Payment Links**
3. Create or select your payment link
4. Copy the payment link URL
5. Use the test link for development/preview and live link for production

**Important**: Never commit your `.env` file to git! It's already included in `.gitignore`.

