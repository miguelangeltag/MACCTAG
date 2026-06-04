# MACCTAG - Tienda Online

Versión HTML estática de MACCTAG, una tienda online de productos gaming, coleccionables y videojuegos digitales.

## Características

- ✅ Página principal con banner hero y categorías
- ✅ Catálogo de productos físicos (figuras, libros)
- ✅ Catálogo de videojuegos digitales
- ✅ Página de detalle de producto
- ✅ Carrito de compras funcional (localStorage)
- ✅ Página de login/registro
- ✅ Diseño responsive
- ✅ Precios en pesos colombianos (COP)

## Productos Incluidos

### Gaming / Coleccionables
- Set de Figuras Demon Slayer - $95,000
- Colección de Figuras Kirby - $120,000
- Set de Figuras Hollow Knight - $140,000
- Pack Wigetta (6 Libros) - $150,000
- JavaScript: Guía Completa - $75,000
- Satanás - Mario Mendoza - $45,000

### Productos Digitales
- Elden Ring - Steam Key - $170,000
- Cyberpunk 2077 - Epic Games Key - $136,000
- Red Dead Redemption 2 - Xbox Key - $102,000
- Hollow Knight - Steam Key - $55,250
- The Witcher 3 GOTY - Steam Key - $80,750
- Stardew Valley - Xbox Key - $38,250

## Cómo usar en GitHub Pages

1. Sube la carpeta `html-version-2` a tu repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama y carpeta donde está el código
4. Espera unos minutos y tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repo/`

## Estructura de Archivos

```
html-version-2/
├── index.html              # Página principal
├── gaming-coleccionables.html  # Productos físicos
├── productos-digitales.html    # Videojuegos digitales
├── producto.html           # Detalle de producto
├── carrito.html           # Carrito de compras
├── login.html             # Login/Registro
├── products.js            # Datos de productos
├── cart.js               # Funcionalidad del carrito
├── css/
│   └── styles.css        # Estilos CSS
└── images/               # Imágenes de productos
    ├── image-1.png       # Stardew Valley
    ├── image-2.png       # Hollow Knight
    ├── image-3.png       # Red Dead Redemption 2
    ├── image-4.png       # Elden Ring
    ├── image-5.png       # The Witcher 3
    ├── image-6.png       # Figuras Demon Slayer
    ├── image-7.png       # Libros Wigetta
    ├── image-8.png       # Libro JavaScript
    ├── image-9.png       # Libro Satanás
    ├── image-10.png      # Figuras Kirby
    └── image-11.png      # Figuras Hollow Knight
```

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage para el carrito

## Funcionalidades

### Carrito de Compras
- Agregar productos
- Modificar cantidades
- Eliminar productos
- Cálculo automático de subtotal, envío y total
- Envío gratis en compras mayores a $200,000
- Persistencia con LocalStorage

### Navegación
- Menú de navegación responsive
- Indicador de productos en el carrito
- Enlaces entre todas las páginas

## Créditos

Desarrollado por MACCTAG
© 2026 Todos los derechos reservados
