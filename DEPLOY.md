# Deploy a Vercel

## Pasos para hacer deploy:

### 1. Preparar el repositorio (si no lo has hecho)
```bash
git init
git add .
git commit -m "Preparado para deploy en Vercel"
git branch -M main
```

Sube tu código a GitHub/GitLab/Bitbucket

### 2. Deploy en Vercel

#### Opción A: Usando Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

#### Opción B: Usando la web de Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Add New Project"
3. Importa tu repositorio de Git
4. Vercel detectará automáticamente que es un proyecto Vite

### 3. Configurar Variable de Entorno
En el dashboard de Vercel:
1. Ve a tu proyecto > Settings > Environment Variables
2. Agrega la variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Tu API key de Resend
   - **Environments:** Production, Preview, Development

### 4. Redeploy
Haz un redeploy para que tome la variable de entorno.

## Archivos de configuración creados:
- `vercel.json` - Configuración de rutas y rewrites
- `.env.example` - Template para variables de entorno
- `.gitignore` - Actualizado para ignorar archivos .env

## ✅ Tu código está listo para deploy!
