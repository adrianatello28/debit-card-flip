# 🚀 Guía para Subir a GitHub y Render

## ✅ PRIMERO: Tu app ya funciona!

Abre en tu navegador: **http://localhost:5174**

---

## 📝 PASO 1: Abrir Terminal

1. Presiona `Cmd + Espacio`
2. Escribe: `terminal`
3. Presiona `Enter`

---

## 📝 PASO 2: Navegar al Proyecto

Copia y pega este comando en la terminal:

```bash
cd "/Users/atelloquijan/Desktop/Stepper feedback/debit-card-flip"
```

Presiona `Enter`

---

## 📝 PASO 3: Guardar Cambios en Git

Copia y pega estos comandos **UNO POR UNO**:

```bash
git add .
```

Presiona `Enter`, luego:

```bash
git commit -m "feat: Agregar microinteracciones completas con Lottie"
```

Presiona `Enter`

---

## 📝 PASO 4: Crear Repositorio en GitHub

1. Ve a: **https://github.com/new**
2. **Repository name**: `debit-card-flip`
3. **Description**: `Pantalla de pedido de tarjeta con animaciones`
4. Selecciona **Public** o **Private** (lo que prefieras)
5. ❌ **NO marques** "Add a README file"
6. ❌ **NO marques** "Add .gitignore"
7. Click en **"Create repository"**

---

## 📝 PASO 5: Conectar con GitHub

GitHub te mostrará comandos. Busca donde dice:

```
…or push an existing repository from the command line
```

Copia los **3 comandos** que aparecen ahí (se ven así):

```bash
git remote add origin https://github.com/TU-USUARIO/debit-card-flip.git
git branch -M main
git push -u origin main
```

Pega esos 3 comandos **UNO POR UNO** en tu terminal y presiona `Enter` después de cada uno.

---

## 📝 PASO 6: Deploy en Render

1. Ve a: **https://render.com**
2. **Sign Up** o **Log In** (puedes usar tu cuenta de GitHub)
3. Click en **"New +"** (esquina superior derecha)
4. Selecciona **"Static Site"**
5. Click en **"Connect a repository"**
6. Busca y selecciona: `debit-card-flip`
7. Click en **"Connect"**

---

## 📝 PASO 7: Configurar Render

Llena estos campos:

- **Name**: `debit-card-flip` (o el nombre que quieras)
- **Branch**: `main`
- **Build Command**: 
  ```
  npm install && npm run build
  ```
- **Publish Directory**: 
  ```
  dist
  ```

Click en **"Create Static Site"**

---

## ⏳ PASO 8: Esperar el Deploy

Render empezará a hacer el build. Esto toma **2-5 minutos**.

Verás logs en tiempo real. Cuando termine, te dará una URL como:

```
https://debit-card-flip.onrender.com
```

¡Y listo! Tu app estará en línea 🎉

---

## 🆘 Si algo sale mal:

**Si dice "Permission denied" en GitHub:**
- Puede que necesites configurar tu clave SSH
- O usa HTTPS: cuando GitHub te pide usuario/contraseña, usa tu GitHub username y un **Personal Access Token** (no tu contraseña)

**Si Render falla el build:**
- Revisa los logs
- Copia el error completo
- Avísame y lo arreglamos

---

## 📱 Ver tu App:

- **Local**: http://localhost:5174
- **GitHub**: https://github.com/TU-USUARIO/debit-card-flip
- **Render**: La URL que Render te dé

---

¿Tienes dudas en algún paso? ¡Avísame!

