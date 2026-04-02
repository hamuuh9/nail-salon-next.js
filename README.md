# Nail Salon Next.js Application

A modern nail salon website with booking system built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works on mobile, tablet, and desktop
- **Booking System** - Online appointment booking with form validation
- **Admin Dashboard** - Manage bookings and view statistics
- **Modern UI** - Clean design with Tailwind CSS
- **TypeScript** - Full type safety
- **API Routes** - Backend endpoints for bookings and authentication

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: JSON file storage (easy to upgrade to a database)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd nail-salon-nextjs
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nail-salon-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── bookings/      # Booking endpoints
│   │   │   └── auth/          # Authentication endpoints
│   │   ├── admin/             # Admin dashboard
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Gallery.tsx
│   │   ├── Booking.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript types
├── data/                      # Data storage
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## Deployment to Vercel

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket

### Step 2: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git in your project folder (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Add remote repository:
```bash
git remote add origin https://github.com/yourusername/nail-salon-nextjs.git
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to Vercel dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
5. Click "Deploy"

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel

## Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add any other environment variables here
```

## Admin Dashboard

Access the admin dashboard at `/admin` to:
- View booking statistics
- Manage bookings
- View customer information

## API Endpoints

- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get all bookings
- `POST /api/auth` - User authentication

## Customization

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  theme: '#d4a5a5',           // Primary theme color
  'theme-hover': '#c99090',   // Hover color
  'theme-light': '#f8e8e8',   // Light background
  'theme-dark': '#b88c8c',    // Dark variant
}
```

### Adding Real Images

1. Replace placeholder URLs in components with actual image paths
2. Place images in the `public/` directory
3. Update image references in components

## Upgrading Database

The current implementation uses JSON files for simplicity. For production, consider:
- **PostgreSQL** with Prisma
- **MongoDB** with Mongoose
- **Supabase** for managed PostgreSQL
- **PlanetScale** for MySQL

## Support

For issues and questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Vercel has [deployment guides](https://vercel.com/docs)

## License

This project is for educational and commercial use.