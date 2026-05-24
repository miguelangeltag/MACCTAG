// Productos
const products = [
  // Figuras Coleccionables
  {
    id: 3,
    name: 'Set de Figuras Demon Slayer - 5 Personajes',
    price: 95000,
    image: 'images/image-6.png',
    category: 'physical',
    description: 'Set de 5 figuras chibi de Demon Slayer con personajes principales del anime. Incluye Tanjiro, Nezuko, Zenitsu, Inosuke y más. Material PVC de alta calidad con acabados detallados. Perfectas para coleccionistas y fans del anime. Tamaño aproximado: 8-10cm cada una.'
  },
  {
    id: 9,
    name: 'Colección de Figuras Kirby - Nintendo',
    price: 120000,
    image: 'images/image-10.png',
    category: 'physical',
    description: 'Colección exclusiva de figuras de Kirby en diferentes versiones y transformaciones. Personaje icónico de Nintendo con múltiples variantes. Material PVC premium con colores vibrantes. Ideal para coleccionistas y fans de los videojuegos clásicos.'
  },
  {
    id: 10,
    name: 'Set de Figuras Hollow Knight - 6 Personajes',
    price: 140000,
    image: 'images/image-11.png',
    category: 'physical',
    description: 'Conjunto completo de 6 figuras del aclamado videojuego Hollow Knight. Incluye The Knight, Hornet y otros personajes icónicos. Detalles meticulosos y acabados de alta calidad. Material PVC resistente. Perfecto para fans del metroidvania indie.'
  },
  // Libros y Mangas
  {
    id: 8,
    name: 'Pack Wigetta - Saga Completa (6 Libros)',
    price: 150000,
    image: 'images/image-7.png',
    category: 'physical',
    description: 'Colección completa de la saga Wigetta con 6 libros de aventuras. Incluye los títulos más populares de estos personajes icónicos creados por Willyrex y Vegetta777. Perfecto regalo para jóvenes lectores y fans de YouTube. Edición con ilustraciones a color.'
  },
  {
    id: 11,
    name: 'JavaScript: Guía Completa - Aprende desde Cero',
    price: 75000,
    image: 'images/image-8.png',
    category: 'physical',
    description: 'Libro completo de JavaScript desde nivel básico hasta avanzado. Incluye ES6+, frameworks modernos, ejemplos prácticos y ejercicios. Ideal para estudiantes, desarrolladores web principiantes y programadores que quieren dominar JavaScript. Más de 400 páginas de contenido actualizado.'
  },
  {
    id: 12,
    name: 'Satanás - Mario Mendoza (Edición Planeta)',
    price: 45000,
    image: 'images/image-9.png',
    category: 'physical',
    description: 'Novela del reconocido autor colombiano Mario Mendoza. Un thriller psicológico basado en hechos reales ocurridos en Bogotá. Lectura imperdible de la literatura colombiana contemporánea. Edición Planeta con portada artística. 10ª edición - Best seller nacional.'
  },
  // Videojuegos Digitales
  {
    id: 4,
    name: 'Elden Ring - Steam Key',
    price: 170000,
    image: 'images/image-4.png',
    category: 'videogame',
    description: 'Código de activación digital para Elden Ring en Steam. RPG de acción épico desarrollado por FromSoftware y George R.R. Martin. Explora Las Tierras Intermedias, un vasto mundo abierto lleno de peligros, misterios y jefes legendarios.'
  },
  {
    id: 5,
    name: 'Cyberpunk 2077 - Epic Games Key',
    price: 136000,
    image: 'https://images.unsplash.com/photo-1661715328971-83cd2179df82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'videogame',
    description: 'Llave digital para Epic Games. Sumérgete en Night City, una megalópolis futurista llena de tecnología. Historia épica en un mundo cyberpunk con múltiples finales.'
  },
  {
    id: 6,
    name: 'Red Dead Redemption 2 - Xbox Key',
    price: 102000,
    image: 'images/image-3.png',
    category: 'videogame',
    description: 'Código para Xbox. Vive la épica historia de Arthur Morgan en el salvaje oeste. Mundo abierto masivo con gráficos impresionantes. Una obra maestra del gaming.'
  },
  {
    id: 13,
    name: 'Hollow Knight - Steam Key',
    price: 55250,
    image: 'images/image-2.png',
    category: 'videogame',
    description: 'Metroidvania aclamado por la crítica. Explora las profundidades de Hallownest. Arte dibujado a mano y combate desafiante. Más de 40 horas de contenido.'
  },
  {
    id: 14,
    name: 'The Witcher 3: Wild Hunt GOTY - Steam Key',
    price: 80750,
    image: 'images/image-5.png',
    category: 'videogame',
    description: 'Edición Game of the Year con todas las expansiones. Sigue a Geralt de Rivia en su búsqueda épica. Uno de los mejores RPG de todos los tiempos.'
  },
  {
    id: 15,
    name: 'Stardew Valley - Xbox Key',
    price: 38250,
    image: 'images/image-1.png',
    category: 'videogame',
    description: 'Simulador de granja indie adorado por millones. Escapa de la vida corporativa y construye la granja de tus sueños. Jugabilidad relajante y adictiva.'
  }
];

function formatCurrency(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
