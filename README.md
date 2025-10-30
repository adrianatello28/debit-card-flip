# Pantalla de Pedido de Tarjeta de Débito con Flip

Aplicación React que implementa una pantalla de pedido de tarjeta de débito física con animación de flip usando Framer Motion.

## 🚀 Características

- Diseño fiel a Figma
- Animación de flip 3D con Framer Motion
- Feedback contextual sin cambio de pantalla
- UI moderna y responsiva

## 📦 Tecnologías

- React 18
- Vite
- Framer Motion
- CSS3

## 🛠️ Instalación y Desarrollo

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:5173**

### Build para producción
```bash
npm run build
```

## 🌐 Deployment

### GitHub

1. Crea un nuevo repositorio en GitHub (sin README, .gitignore o licencia)
2. Conecta tu repositorio local:
```bash
git remote add origin https://github.com/tu-usuario/debit-card-flip.git
git branch -M main
git push -u origin main
```

### Render

1. Ve a [render.com](https://render.com) e inicia sesión
2. Click en "New +" y selecciona "Static Site"
3. Conecta tu repositorio de GitHub
4. Configura los siguientes valores:
   - **Name**: `debit-card-flip` (o el nombre que prefieras)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click en "Create Static Site"

Render creará automáticamente un deploy y te dará una URL pública como:
`https://debit-card-flip.onrender.com`

Cada vez que hagas push a la rama `main`, Render hará un deploy automático.

## 📱 Uso

1. La pantalla muestra una tarjeta de débito en 3D
2. Al hacer click en "Pedir cartão grátis", la tarjeta hace un flip
3. El reverso muestra un check indicando que la solicitud fue exitosa
4. La transición es suave y natural sin cambio de pantalla

## 📄 Licencia

MIT
