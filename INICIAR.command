#!/bin/bash

# Script para iniciar el proyecto automáticamente
# Solo haz doble clic en este archivo

cd "$(dirname "$0")"

echo "=========================================="
echo "🚀 Instalando dependencias..."
echo "=========================================="
npm install

echo ""
echo "=========================================="
echo "✅ Dependencias instaladas!"
echo "🌐 Iniciando servidor..."
echo "=========================================="
npm run dev

