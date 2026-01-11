# ✨ Star Sticker Shop

A beautiful e-commerce website for handmade galaxy-themed stickers with a pastel aesthetic. Built with Next.js, TypeScript, Tailwind CSS, and Stripe integration.

![Star Sticker Shop](https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=400&fit=crop)

## 🌟 Features

- 🎨 **Pastel Galaxy Theme** - Beautiful gradient backgrounds with twinkling stars
- 🛍️ **Product Browsing** - Browse a collection of handmade stickers
- 🛒 **Shopping Cart** - Add, remove, and update quantities
- 📦 **Checkout Flow** - Complete checkout with shipping address form
- 💳 **Stripe Payment Integration** - Secure payment processing
- ✨ **Fancy Animations** - Smooth transitions and interactive effects with Framer Motion
- 🎭 **Custom Fonts** - Beautiful typography with Quicksand and Pacifico
- 📱 **Responsive Design** - Works perfectly on all devices
- 💾 **Persistent Cart** - Cart state persists across sessions

## 🚀 One-Click Deployment to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liuzimo2013-a11y/Stars-website&env=NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,STRIPE_SECRET_KEY&envDescription=Stripe%20API%20keys%20required%20for%20payment%20processing&envLink=https://dashboard.stripe.com/apikeys)

### Steps:
1. Click the "Deploy with Vercel" button above
2. Sign in to Vercel (or create an account)
3. Add your Stripe API keys as environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
   - `STRIPE_SECRET_KEY` - Your Stripe secret key
4. Click "Deploy"
5. Your site will be live in minutes! 🎉

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/liuzimo2013-a11y/Stars-website.git
cd Stars-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Stripe keys:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Payment Processing:** [Stripe](https://stripe.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Google Fonts (Quicksand, Pacifico)

## 📁 Project Structure

```
Stars-website/
├── app/
│   ├── api/
│   │   └── create-payment-intent/    # Stripe payment API
│   ├── cart/                          # Shopping cart page
│   ├── checkout/                      # Checkout page
│   ├── globals.css                    # Global styles & animations
│   ├── layout.tsx                     # Root layout with header
│   └── page.tsx                       # Homepage with products
├── components/
│   ├── Header.tsx                     # Navigation header
│   ├── ProductCard.tsx                # Product display component
│   └── StarryBackground.tsx           # Animated star background
├── lib/
│   ├── products.ts                    # Product data
│   └── store.ts                       # Zustand cart store
├── public/                            # Static assets
└── package.json
```

## 💳 Stripe Integration

The website includes Stripe payment integration. To enable real payments:

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Add the keys to your environment variables
4. For production, use live mode keys (starting with `pk_live_` and `sk_live_`)

**Note:** The demo currently runs in test mode. No real payments will be processed without valid Stripe keys.

## 🌈 Customization

### Adding Products
Edit `lib/products.ts` to add or modify products:

```typescript
{
  id: '13',
  name: 'Your Sticker',
  description: 'Description here',
  price: 3.99,
  image: 'https://your-image-url.com',
  category: 'category',
}
```

### Changing Colors
Modify the CSS variables in `app/globals.css`:

```css
:root {
  --pastel-purple: #E0BBE4;
  --pastel-pink: #FEC8D8;
  --pastel-blue: #D4E2F9;
  /* Add your colors here */
}
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with 💜 and ✨ by the Star Sticker Shop team

