# Deployment Guide

Choose your preferred hosting platform:

## Option 1: Netlify (Easiest) ⭐

### Using Web Interface
1. Push code to GitHub
2. Go to netlify.com and sign up
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

### Using CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Netlify Link:** https://www.netlify.com

---

## Option 2: Vercel (Next Best) 

### Using Web Interface
1. Push code to GitHub
2. Go to vercel.com and sign up
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects it's a Vite project
6. Click Deploy!

### Using CLI
```bash
npm install -g vercel
npm run build
vercel --prod
```

**Vercel Link:** https://vercel.com

---

## Option 3: GitHub Pages

1. Edit `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

2. Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

**Docs:** https://pages.github.com

---

## Option 4: Heroku

1. Create account at heroku.com
2. Install Heroku CLI
3. Login: `heroku login`
4. Create app: `heroku create your-app-name`
5. Deploy: `git push heroku main`

**Docs:** https://devcenter.heroku.com

---

## Option 5: AWS S3 + CloudFront

1. Create S3 bucket
2. Run: `npm run build`
3. Upload `dist` folder to S3
4. Set up CloudFront distribution
5. Point domain to CloudFront

**AWS Guide:** https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html

---

## Option 6: Traditional Web Host (cPanel/FTP)

1. Run: `npm run build`
2. Connect via FTP to your host
3. Upload contents of `dist` folder to `public_html`
4. Done!

---

## Domain Setup

After deploying, configure your domain:

### For most platforms:
1. Point your domain nameservers to the hosting provider
2. Or add CNAME records to the hosting provider

### Update Site Info
Edit `index.html` with your domain-specific info

---

## Performance Checks

After deploying, test:
- ✅ PageSpeed Insights: https://pagespeed.web.dev
- ✅ GTmetrix: https://gtmetrix.com
- ✅ Lighthouse in Chrome DevTools

---

## Monitoring

### Track Visitors
- Add Google Analytics to `index.html`
- Or use Plausible Analytics
- Or use Netlify Analytics

### Monitor Errors
- Sentry.io for error tracking
- Browser DevTools console
- Server logs from hosting provider

---

## Custom Domain

Once deployed, configure your domain (e.g., opportunityos.com):

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Update nameservers to point to your hosting
3. Wait 24-48 hours for DNS propagation
4. Test with `ping yourdomain.com`

---

## SSL Certificate

Most platforms (Netlify, Vercel) provide free SSL:
- ✅ Automatic HTTPS
- ✅ Auto-renewal
- ✅ No additional setup

---

## Recommended Setup

**Best for most users:** Netlify + GitHub
- Easy to use
- Free SSL
- Auto-deploy on push
- Great performance
- Excellent free tier

**Steps:**
1. Push to GitHub
2. Connect to Netlify
3. Deploy
4. Buy domain
5. Point to Netlify
6. Done!

---

Need help? Visit docs for your chosen platform!
