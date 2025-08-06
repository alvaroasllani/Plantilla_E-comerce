# FlexiShop Forge

Un e-commerce moderno y flexible construido con React, TypeScript y Tailwind CSS.

## Características

- Interfaz moderna y responsiva
- Sistema de autenticación completo
- Carrito de compras funcional
- Gestión de productos y categorías
- Panel de perfil de usuario
- Diseño optimizado para móviles

## Tecnologías Utilizadas

- **React** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de interfaz reutilizables
- **React Router** - Enrutamiento del lado del cliente
- **React Query** - Gestión de estado del servidor

## Instalación y Configuración

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Navegar al directorio del proyecto
cd flexi-shop-forge

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter para revisar el código
- `npm run preview` - Previsualiza la construcción de producción

## Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── contexts/      # Contextos de React
├── hooks/         # Hooks personalizados
├── lib/           # Utilidades y configuraciones
├── data/          # Datos mock y constantes
└── App.tsx        # Componente principal
```

## Funcionalidades

### Autenticación

- Inicio de sesión y registro
- Gestión de sesiones
- Protección de rutas

### Tienda

- Catálogo de productos
- Filtrado por categorías
- Búsqueda de productos
- Vista detallada de productos

### Carrito de Compras

- Agregar/remover productos
- Actualización de cantidades
- Persistencia en localStorage

### Perfil de Usuario

- Información personal
- Historial de pedidos
- Gestión de direcciones

## Contribución

1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/nueva-funcion`)
3. Confirma tus cambios (`git commit -am 'Agregar nueva función'`)
4. Sube la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
