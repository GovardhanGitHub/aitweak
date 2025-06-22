This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

https://aitweak.co/## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploy on GitHub Pages

This project is configured for GitHub Pages deployment using GitHub Actions. Follow these steps:

1. Create a GitHub repository for your project
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/luminos-next.git
   git push -u origin main
   ```

2. In your GitHub repository settings:
   - Go to "Settings" > "Pages"
   - Under "Build and deployment", select "GitHub Actions" as the source

3. Customize your deployment (optional):
   - Edit the `.github/workflows/deploy.yml` file to customize build options
   - Update `public/CNAME` if you're using a custom domain
   - The `basePath` in `next.config.mjs` is set to `/luminos-next` for GitHub Pages, change this to match your repository name

4. Push changes to the `main` branch to trigger automatic deployment:
   ```bash
   git add .
   git commit -m "Update deployment configuration"
   git push
   ```

The GitHub Actions workflow will:
- Set up the Node.js environment
- Install dependencies with `npm ci`
- Build the project with `npm run build`
- Deploy the static output from the `out` directory to GitHub Pages

After deployment, your site will be available at:
- `https://yourusername.github.io/luminos-next/` (without custom domain)
- `https://yourdomain.com/` (with custom domain, if configured)

**Note:** The first deployment might take a few minutes to complete. You can check the progress in the "Actions" tab of your GitHub repository.
