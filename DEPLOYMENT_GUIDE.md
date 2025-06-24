# Deployment Checklist & Instructions

## 🚨 URGENT: Complete These Before Your Presentation

### 1. Fix Build Errors (15 minutes)

Run this command to fix unused imports:

```bash
# Set TypeScript to warning instead of error for unused variables
echo '{"compilerOptions": {"noUnusedLocals": false, "noUnusedParameters": false}}' > tsconfig.temp.json
```

### 2. Backend Deployment on Render (30 minutes)

#### Environment Variables for Render:

```
NODE_ENV=production
PORT=10000
MONGO_URI=mongodb+srv://admin:kz2tvnyneLztSTbZ@cluster0.oppcb.mongodb.net/Codelyn
JWT_SECRET=your_super_secure_jwt_secret_256_bits_minimum_for_production
```

#### Deploy Steps:

1. Push your code to GitHub
2. Connect Render to your GitHub repo
3. Set build command: `cd server && npm install`
4. Set start command: `npm start`
5. Add environment variables above

### 3. Frontend Deployment on Netlify (20 minutes)

#### Before Deploying:

1. Update .env.production with your Render URL:

```
VITE_API_URL=https://your-render-backend-url.onrender.com/api
```

2. Update CORS in server/index.js:

```javascript
const corsOptions = {
  origin: ["https://your-netlify-site.netlify.app"],
  credentials: true,
};
```

#### Deploy Steps:

1. Run `npm run build` locally first to test
2. Deploy to Netlify (drag & drop dist folder or connect GitHub)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### 4. Critical Fixes Needed (10 minutes)

#### Update API URLs in these files:

- src/components/Navbar.tsx (line 122)
- src/components/tools/ProfilePictureUpload.tsx (lines 64, 108, 180)
- src/components/Routes/dashboard/usermanagement.tsx (multiple lines)

Replace `http://localhost:3000` with environment variable usage.

## 🎯 Deployment Status: ⚠️ NEEDS WORK

### ✅ Ready:

- MongoDB Atlas connection
- JWT authentication
- Core functionality works
- Modern tech stack

### ❌ Critical Issues:

- Build errors prevent deployment
- Hardcoded localhost URLs
- Missing environment configuration
- No proper CORS setup

### ⏰ Time Estimate: 1-2 hours of focused work

## 🚀 Quick Fix for Demo:

If short on time, you can demo locally by:

1. Starting backend: `cd server && node index.js`
2. Starting frontend: `npm run dev`
3. Use localhost for demo, mention "deployed version coming soon"

## 📱 After Presentation:

1. Fix all TypeScript errors
2. Add error boundaries
3. Implement proper loading states
4. Add analytics
5. Set up monitoring
