# 📝 Guía de Deployment - Paso a Paso

## ✅ Estado Actual

- ✅ Proyecto creado con Vite + React
- ✅ Componente CardFlip implementado con Framer Motion
- ✅ Pantalla completa con diseño fiel a Figma
- ✅ Git inicializado y commits creados
- ✅ Servidor de desarrollo corriendo en **http://localhost:5173**

## 🌐 Próximos Pasos

### 1. Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Completa los campos:
   - **Repository name**: `debit-card-flip` (o el nombre que prefieras)
   - **Description**: "Pantalla de pedido de tarjeta de débito con animación flip"
   - **Public** o **Private**: según tu preferencia
   - ❌ **NO marques** "Add a README file"
   - ❌ **NO marques** "Add .gitignore"
3. Click en "Create repository"

### 2. Conectar y Subir a GitHub

GitHub te mostrará las instrucciones, pero básicamente son:

```bash
cd "/Users/atelloquijan/Stepper feedback/debit-card-flip"
git remote add origin https://github.com/TU-USUARIO/debit-card-flip.git
git branch -M main
git push -u origin main
```

Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

### 3. Deploy en Render

#### A. Crear cuenta en Render (si no tienes)
1. Ve a https://render.com
2. Click en "Get Started"
3. Puedes registrarte con GitHub (recomendado)

#### B. Crear Static Site
1. Una vez en el dashboard, click en **"New +"** (esquina superior derecha)
2. Selecciona **"Static Site"**
3. Conecta tu cuenta de GitHub si no lo has hecho
4. Busca y selecciona el repositorio `debit-card-flip`
5. Click en **"Connect"**

#### C. Configurar el Deploy
Render te pedirá configurar lo siguiente:

- **Name**: `debit-card-flip` (este será parte de tu URL)
- **Branch**: `main`
- **Root Directory**: (dejar vacío)
- **Build Command**: 
  ```
  npm install && npm run build
  ```
- **Publish Directory**: 
  ```
  dist
  ```
- **Auto-Deploy**: `Yes` (recomendado)

6. Click en **"Create Static Site"**

#### D. Esperar el Deploy
- Render comenzará a hacer el build automáticamente
- Esto tomará 2-5 minutos la primera vez
- Verás los logs en tiempo real

#### E. Obtener tu URL
Una vez que el deploy termine exitosamente:
- Render te dará una URL como: `https://debit-card-flip.onrender.com`
- Esta URL es pública y puedes compartirla

### 4. Deploys Futuros (Automático)

Cada vez que hagas push a la rama `main`:

```bash
git add .
git commit -m "Tu mensaje de commit"
git push
```

Render detectará el cambio y hará un deploy automático.

## 🎉 ¡Listo!

Tu aplicación estará disponible en:
- **Local**: http://localhost:5173 (mientras el servidor esté corriendo)
- **GitHub**: https://github.com/TU-USUARIO/debit-card-flip
- **Producción**: https://tu-sitio.onrender.com

## 🔧 Comandos Útiles

```bash
# Ver el servidor local
npm run dev

# Crear build de producción (probar localmente)
npm run build

# Preview del build
npm run preview

# Ver status de git
git status

# Ver logs de commits
git log --oneline
```

## 📌 Notas Importantes

- Render puede tardar unos minutos en el primer deploy
- Si cambias algo, asegúrate de hacer commit y push
- Los deploys automáticos solo funcionan en la rama `main`
- Si tienes errores en el build, revisa los logs en Render

