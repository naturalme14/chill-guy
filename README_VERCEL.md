# Deploy ke Vercel

Panduan lengkap untuk deploy **Grade Predictor - Chill Guy Edition** ke Vercel.

## ✅ Prasyarat

- Akun Vercel (gratis di https://vercel.com)
- Repository GitHub sudah terhubung dengan Vercel
- Node.js 18+ (Vercel otomatis handle)

## 🚀 Langkah-Langkah Deploy

### 1. **Connect Repository ke Vercel**
   - Buka https://vercel.com/dashboard
   - Klik "Add New" → "Project"
   - Pilih GitHub repository: `naturalme14/chill-guy`
   - Vercel akan auto-detect Next.js

### 2. **Configure Environment Variables** (Opsional)
   Jika ingin menggunakan Grok API untuk dynamic roasts:
   
   - Di Vercel dashboard, go to "Settings" → "Environment Variables"
   - Tambahkan:
     ```
     GROK_API_KEY = your_grok_api_key_here
     NEXT_PUBLIC_APP_URL = https://your-domain.vercel.app
     ```
   
   **Catatan:** Jika tidak ada API key, fallback responses akan digunakan (sudah ada di code).

### 3. **Deploy Settings** (Sudah dikonfigurasi)
   - **Build Command:** `npm run build` ✓
   - **Output Directory:** `.next` ✓
   - **Install Command:** `npm install` ✓
   - **Node.js Version:** 18.x atau 20.x ✓

### 4. **Klik Deploy**
   Vercel akan otomatis:
   - Build proyek
   - Run tests (jika ada)
   - Deploy ke production
   - Assign URL domain (mis: `chill-guy.vercel.app`)

## 📋 Checklist Sebelum Deploy

- ✅ Repository sudah di-push ke GitHub
- ✅ `package.json` sudah benar dengan semua dependencies
- ✅ `next.config.ts` sudah optimized
- ✅ Environment variables `.env.local.example` tersedia
- ✅ Build lokal berhasil: `npm run build`
- ✅ No TypeScript errors (ignoreBuildErrors: true)

## 🔒 Keamanan

- **Never commit `.env.local`** - sudah ada di `.gitignore` ✓
- API keys hanya disimpan di Vercel dashboard Secrets
- Fallback responses available jika API gagal

## 🌐 Custom Domain (Opsional)

1. Di Vercel Project Settings → "Domains"
2. Tambahkan custom domain (mis: `gradepredictor.io`)
3. Update DNS records sesuai instruksi Vercel

## 🔄 Auto-Redeploy

Setiap push ke `main` branch akan otomatis:
- Trigger build di Vercel
- Run production build
- Deploy jika build success

## 📊 Monitoring

- Vercel Dashboard: https://vercel.com/dashboard
- Analytics, logs, dan deployment history tersedia
- Automatic rollback jika ada issue

## 🆘 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Build gagal | Cek logs di Vercel, pastikan `npm run build` lokal success |
| 404 Not Found | Clear browser cache, check `/public` assets sudah terupload |
| Slow performance | Check Vercel analytics, optimize image sizes |
| API error | Set `GROK_API_KEY` di Vercel secrets, atau gunakan fallback |

## ✨ Tips

- Gunakan Vercel Preview Deployments untuk PR testing
- Enable "Automatic Git Integration" untuk auto-deploy setiap push
- Cek "Analytics" di dashboard untuk traffic insights
- Setup "Alerts" untuk gagal deployment

---

**Selamat! Proyek siap di-deploy ke Vercel! 🚀**
