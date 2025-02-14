# 🏆 GoatPass Pokedex

## 📌 Descripción
GoatPass Pokedex es una aplicación desarrollada con **React Native** y **Expo** que permite explorar información detallada sobre Pokémon. Los usuarios pueden ver estadísticas, tipos y características de cada Pokémon en una interfaz intuitiva y dinámica.

## 🚀 Tecnologías utilizadas
- **React Native** - Para la construcción de la aplicación móvil
- **Expo** - Para facilitar el desarrollo y despliegue
- **EAS (Expo Application Services)** - Para construcción y actualización de la app
- **React Navigation** - Para la gestión de pantallas
- **Styled Components** - Para el manejo de estilos
- **PokéAPI** - Fuente de datos sobre los Pokémon
- **TypeScript**: Para mejorar la mantenibilidad del código.
- **Fetch API**: Para realizar peticiones a la API.
- **PokéAPI** ([https://pokeapi.co/](https://pokeapi.co/)): Fuente de datos sobre Pokémon.

## ⚡ Decisiones técnicas relevantes
1. **Uso de Expo y EAS**: Se optó por Expo para facilitar el desarrollo y EAS para el despliegue y la construcción de versiones listas para la App Store y Google Play.
2. **Gestión de estado**: Se implementó `useState` y `useEffect` para manejar los datos de la API.
3. **Diseño modular**: Componentes reutilizables para mejorar la mantenibilidad.
4. **Carga optimizada**: Se implementó un `ActivityIndicator` para mejorar la experiencia de usuario mientras se obtienen los datos.

## 📦 Instalación
Para correr la aplicación localmente, sigue estos pasos:
```sh
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npx expo start
```

## 🌍 Despliegue
La aplicación está disponible en Expo Hosting:
🔗 [GoatPass Pokedex en Expo](https://expo.dev/accounts/marioortiz123/projects/goatpass-pokedex/updates/a1944194-454f-4b75-b273-cb80f38ec50a)

## 📱 Construcción para producción
Para generar una versión lista para la App Store o Google Play:
```sh
# Construcción para Android
eas build --platform android

# Construcción para iOS
eas build --platform ios
```

## 📂 Repositorio Git
Puedes encontrar el código fuente en el siguiente enlace:
🔗 [Repositorio en GitHub](https://github.com/redfushion/goatpass-pokedex)


🔥 ¡Gracias por revisar este proyecto! Si tienes preguntas o sugerencias, no dudes en abrir un issue en el repositorio. 🚀