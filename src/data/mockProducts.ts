import { Product } from '@/contexts/CartContext';

export const mockProducts: Product[] = [
  // Electrónicos
  {
    id: '1',
    name: 'Smartphone Pro Max 256GB',
    price: 999.99,
    originalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    description: 'El smartphone más avanzado con cámara profesional, pantalla OLED y procesador de última generación.',
    category: 'Electronics',
    brand: 'TechBrand',
    stock: 25,
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.8,
    reviews: 245
  },
  {
    id: '2',
    name: 'Laptop Gaming RGB 16GB RAM',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop',
    description: 'Laptop para gaming con tarjeta gráfica dedicada, pantalla de 144Hz y teclado RGB.',
    category: 'Electronics',
    brand: 'GamerTech',
    stock: 15,
    isActive: true,
    isFeatured: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 128
  },
  {
    id: '3',
    name: 'Auriculares Inalámbricos Pro',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Auriculares con cancelación de ruido activa y 30 horas de batería.',
    category: 'Electronics',
    brand: 'SoundWave',
    stock: 50,
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.5,
    reviews: 89
  },
  
  // Moda
  {
    id: '4',
    name: 'Chaqueta de Cuero Premium',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    description: 'Chaqueta de cuero genuino con forro interno y múltiples bolsillos.',
    category: 'Fashion',
    brand: 'StyleCo',
    stock: 20,
    isActive: true,
    isFeatured: true,
    isOnSale: false,
    rating: 4.7,
    reviews: 76
  },
  {
    id: '5',
    name: 'Jeans Skinny Fit Azul',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    description: 'Jeans de corte moderno en mezclilla de alta calidad.',
    category: 'Fashion',
    brand: 'DenimCo',
    stock: 35,
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.3,
    reviews: 156
  },
  {
    id: '6',
    name: 'Zapatillas Deportivas Blancas',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
    description: 'Zapatillas cómodas para uso diario con suela de goma antideslizante.',
    category: 'Fashion',
    brand: 'SportStyle',
    stock: 45,
    isActive: true,
    isFeatured: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 203
  },

  // Home & Garden
  {
    id: '7',
    name: 'Cafetera Automática Espresso',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
    description: 'Cafetera profesional con molinillo integrado y pantalla táctil.',
    category: 'Home',
    brand: 'BrewMaster',
    stock: 12,
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: '8',
    name: 'Sofá Modular Gris 3 Plazas',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    description: 'Sofá cómodo y elegante con cojines removibles y estructura de madera.',
    category: 'Home',
    brand: 'ComfortHome',
    stock: 8,
    isActive: true,
    isFeatured: true,
    isOnSale: false,
    rating: 4.6,
    reviews: 34
  },

  // Books
  {
    id: '9',
    name: 'Curso Completo de JavaScript',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    description: 'Libro completo para aprender JavaScript desde cero hasta nivel avanzado.',
    category: 'Books',
    brand: 'TechBooks',
    stock: 100,
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.8,
    reviews: 445
  },
  {
    id: '10',
    name: 'Novela de Misterio: El Secreto',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
    description: 'Thriller psicológico lleno de suspense y giros inesperados.',
    category: 'Books',
    brand: 'Mystery Press',
    stock: 75,
    isActive: true,
    isFeatured: false,
    isOnSale: false,
    rating: 4.2,
    reviews: 189
  },

  // Sports
  {
    id: '11',
    name: 'Bicicleta Montaña 21 Velocidades',
    price: 599.99,
    originalPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop',
    description: 'Bicicleta de montaña con suspensión delantera y frenos de disco.',
    category: 'Sports',
    brand: 'MountainRide',
    stock: 10,
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.7,
    reviews: 92
  },
  {
    id: '12',
    name: 'Set de Pesas Ajustables 20kg',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    description: 'Set completo de pesas con discos intercambiables para ejercicio en casa.',
    category: 'Sports',
    brand: 'FitGear',
    stock: 25,
    isActive: true,
    isFeatured: false,
    isOnSale: false,
    rating: 4.5,
    reviews: 167
  },

  // Beauty
  {
    id: '13',
    name: 'Kit de Maquillaje Profesional',
    price: 89.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    description: 'Kit completo con paleta de sombras, bases y pinceles profesionales.',
    category: 'Beauty',
    brand: 'GlamourPro',
    stock: 30,
    isActive: true,
    isFeatured: false,
    isOnSale: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: '14',
    name: 'Perfume Elegance 100ml',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop',
    description: 'Fragancia elegante con notas florales y toques de vainilla.',
    category: 'Beauty',
    brand: 'LuxScent',
    stock: 40,
    isActive: true,
    isFeatured: false,
    isOnSale: false,
    rating: 4.4,
    reviews: 156
  },

  // Toys
  {
    id: '15',
    name: 'Robot Educativo Programable',
    price: 159.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop',
    description: 'Robot interactivo para enseñar programación y robótica a niños.',
    category: 'Toys',
    brand: 'EduBot',
    stock: 18,
    isActive: true,
    isFeatured: true,
    isOnSale: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: '16',
    name: 'Puzzle 1000 Piezas Paisaje',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=500&fit=crop',
    description: 'Puzzle de alta calidad con imagen de paisaje montañoso.',
    category: 'Toys',
    brand: 'PuzzleMaster',
    stock: 60,
    isActive: true,
    isFeatured: false,
    isOnSale: false,
    rating: 4.3,
    reviews: 78
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase() && product.isActive
  );
};

export const getFeaturedProducts = (): Product[] => {
  return mockProducts.filter(product => product.isFeatured && product.isActive);
};

export const getOnSaleProducts = (): Product[] => {
  return mockProducts.filter(product => product.isOnSale && product.isActive);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return mockProducts.filter(product => 
    product.isActive && (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    )
  );
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id && product.isActive);
};

export const categories = [
  'Electronics',
  'Fashion', 
  'Home',
  'Books',
  'Sports',
  'Beauty',
  'Toys'
];

export const brands = [
  'TechBrand',
  'GamerTech',
  'SoundWave',
  'StyleCo',
  'DenimCo',
  'SportStyle',
  'BrewMaster',
  'ComfortHome',
  'TechBooks',
  'Mystery Press',
  'MountainRide',
  'FitGear',
  'GlamourPro',
  'LuxScent',
  'EduBot',
  'PuzzleMaster'
];