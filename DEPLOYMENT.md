# Deployment Guide - Nail Salon Next.js App

## Quick Deployment Checklist

- [ ] Push code to GitHub/GitLab/Bitbucket
- [ ] Create Vercel account
- [ ] Connect repository to Vercel
- [ ] Deploy project
- [ ] Set up custom domain (optional)
- [ ] Verify deployment

## Step-by-Step Deployment to Vercel

### 1. Prepare Your Project

#### Initialize Git (if not already done)
```bash
cd nail-salon-nextjs
git init
git add .
git commit -m "Initial commit: Nail salon website with booking system"
```

#### Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `nail-salon-nextjs`
4. Keep it public or private
5. Click "Create repository"

#### Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/nail-salon-nextjs.git
git branch -M main
git push -u origin main
```

### 2. Set Up Vercel

#### Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub

#### Deploy Project
1. In Vercel dashboard, click "Add New..." → "Project"
2. Find your `nail-salon-nextjs` repository
3. Click "Import"

### 3. Configure Project Settings

Vercel will automatically detect Next.js. Verify these settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)
- **Root Directory**: `.` (leave empty)

### 4. Environment Variables (Optional)

If you have environment variables, add them:

1. In project settings, go to "Environment Variables"
2. Add variables like:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`
3. Click "Save"

### 5. Deploy

1. Click "Deploy"
2. Wait for build to complete (usually 1-2 minutes)
3. Once done, you'll get a URL like: `https://nail-salon-nextjs.vercel.app`

### 6. Custom Domain (Optional)

#### Get a Domain
1. Purchase from Namecheap, Google Domains, or similar
2. Common choices: `nailsalon.com`, `beautysalon.com`, etc.

#### Configure in Vercel
1. In your project dashboard, go to "Settings" → "Domains"
2. Enter your domain name
3. Vercel will provide DNS records to add

#### Update DNS
At your domain registrar, add these records:

**Option A: A Record (Recommended)**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Option B: CNAME Record**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. Wait for DNS propagation (can take up to 48 hours)
5. Vercel will automatically provision SSL certificate

### 7. Verify Deployment

Visit your URL and test:
- [ ] Home page loads correctly
- [ ] All sections display properly
- [ ] Mobile responsiveness works
- [ ] Booking form submits (check `/admin/bookings`)
- [ ] All images load
- [ ] Navigation works

## Deployment Troubleshooting

### Common Issues and Solutions

#### Build Fails
**Error**: `Module not found: Can't resolve '...'`
**Solution**: Run `npm install` locally first, then push `package-lock.json`

#### Images Not Loading
**Error**: Images show as broken
**Solution**: Ensure images are in `public/` directory and paths are correct

#### API Routes Not Working
**Error**: `404` on API calls
**Solution**: Check that API routes are in `src/app/api/` directory

#### TypeScript Errors
**Error**: Type errors during build
**Solution**: Run `npm run lint` locally to fix issues

### Check Build Logs
1. In Vercel dashboard, go to "Deployments"
2. Click on the failed deployment
3. Check build logs for specific errors

## Post-Deployment Tasks

### 1. Update Environment Variables
Add any production-specific variables in Vercel dashboard

### 2. Set Up Analytics (Optional)
Vercel provides built-in analytics:
1. Go to project dashboard
2. Click "Analytics"
3. Enable Web Analytics

### 3. Configure Monitoring
Set up:
- **Uptime monitoring** (UptimeRobot, Pingdom)
- **Error tracking** (Sentry)
- **Performance monitoring** (Vercel Analytics)

### 4. Backup Strategy
Since data is stored in JSON files:
- Regular backups of `/data/` directory
- Consider migrating to a database for production

## Upgrading to Production Database

For real business use, replace JSON storage:

### Option 1: Supabase (Free PostgreSQL)
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string
4. Update API routes to use Supabase

### Option 2: PlanetScale (MySQL)
1. Create account at [planetscale.com](https://planetscale.com)
2. Create database
3. Use Prisma or Drizzle ORM

### Option 3: MongoDB Atlas
1. Create free cluster at [mongodb.com](https://mongodb.com)
2. Get connection string
3. Use Mongoose or MongoDB driver

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Push to `main` branch
- **Preview**: Pull requests get preview URLs
- **Development**: Optional development branch

## Security Considerations

1. **Environment Variables**: Never commit secrets
2. **API Security**: Add rate limiting for production
3. **Authentication**: Implement proper auth for admin
4. **Data Validation**: Sanitize all user inputs
5. **HTTPS**: Vercel provides automatically

## Scaling

For high traffic:
1. **Upgrade Vercel Plan**: Pro or Enterprise
2. **Database**: Move to proper database
3. **CDN**: Vercel includes global CDN
4. **Caching**: Implement Redis for sessions

## Rollback Procedure

If deployment has issues:
1. Go to Vercel dashboard → "Deployments"
2. Find previous working deployment
3. Click "..." → "Promote to Production"

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Community](https://vercel.com/community)

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build locally
npm run build

# Start production server locally
npm start

# Check for errors
npm run lint

# Deploy to Vercel (if CLI installed)
vercel

# Deploy to production
vercel --prod
```

## Vercel CLI (Optional)

Install Vercel CLI for command-line deployment:
```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```