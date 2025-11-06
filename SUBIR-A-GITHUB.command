#!/bin/bash

# Script para subir el proyecto a GitHub
cd "$(dirname "$0")"

echo "=========================================="
echo "📦 Preparando proyecto para GitHub..."
echo "=========================================="

# Agregar todos los archivos
git add .

# Crear commit con todas las microinteracciones
git commit -m "feat: Agregar microinteracciones completas con Lottie y feedback contextual"

echo ""
echo "=========================================="
echo "✅ Cambios guardados localmente!"
echo ""
echo "📝 SIGUIENTE PASO - CREAR REPOSITORIO:"
echo "=========================================="
echo ""
echo "1. Ve a: https://github.com/new"
echo "2. Nombre del repo: debit-card-flip"
echo "3. Descripción: Pantalla de pedido de tarjeta con animaciones"
echo "4. Público o Privado: tu eliges"
echo "5. NO marques 'Add README' ni nada más"
echo "6. Click en 'Create repository'"
echo ""
echo "7. Copia el comando que GitHub te muestra:"
echo "   git remote add origin https://github.com/TU-USUARIO/debit-card-flip.git"
echo ""
echo "8. Pégalo en esta terminal y presiona Enter"
echo ""
echo "9. Después ejecuta:"
echo "   git push -u origin main"
echo ""
echo "=========================================="
echo "Presiona Enter cuando hayas terminado..."
read

echo ""
echo "¿Quieres que intente hacer push ahora? (y/n)"
read -r response

if [[ "$response" == "y" ]]; then
    echo "Haciendo push..."
    git push -u origin main
    
    echo ""
    echo "=========================================="
    echo "✅ ¡Proyecto subido a GitHub!"
    echo "=========================================="
    echo ""
    echo "📝 SIGUIENTE PASO - RENDER:"
    echo ""
    echo "1. Ve a: https://render.com"
    echo "2. Click en 'New +' → 'Static Site'"
    echo "3. Conecta tu repositorio de GitHub"
    echo "4. Configura:"
    echo "   - Build Command: npm install && npm run build"
    echo "   - Publish Directory: dist"
    echo "5. Click en 'Create Static Site'"
    echo ""
    echo "¡Render te dará una URL pública!"
    echo "=========================================="
fi

