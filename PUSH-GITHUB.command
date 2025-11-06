#!/bin/bash

# Script para subir el proyecto a GitHub
cd "$(dirname "$0")"

echo "=========================================="
echo "🚀 Subiendo proyecto a GitHub..."
echo "=========================================="
echo ""

# Conectar con GitHub
echo "📡 Conectando con GitHub..."
git remote add origin https://github.com/adrianatello28/TD_prueba1.git 2>/dev/null || echo "Remote ya existe, continuando..."

# Cambiar a rama main
echo "🔄 Cambiando a rama main..."
git branch -M main

# Hacer push
echo "⬆️  Subiendo archivos..."
git push -u origin main

echo ""
echo "=========================================="
echo "✅ ¡Proyecto subido exitosamente!"
echo "=========================================="
echo ""
echo "Tu repositorio: https://github.com/adrianatello28/TD_prueba1"
echo ""
echo "=========================================="
echo "🌐 SIGUIENTE PASO - RENDER"
echo "=========================================="
echo ""
echo "1. Ve a: https://render.com"
echo "2. Sign Up con GitHub"
echo "3. Click en 'New +' → 'Static Site'"
echo "4. Conecta el repositorio 'TD_prueba1'"
echo "5. Configura:"
echo "   - Build Command: npm install && npm run build"
echo "   - Publish Directory: dist"
echo "6. Click 'Create Static Site'"
echo ""
echo "En 2-5 minutos tendrás tu URL pública!"
echo "=========================================="
echo ""
echo "Presiona cualquier tecla para cerrar..."
read -n 1

