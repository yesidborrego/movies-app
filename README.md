# movies-app

## Git clone

```
git clone https://github.com/yesidborrego/movies-app.git
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Tools and library used

- Vue/cli v5.0.8: https://cli.vuejs.org/
- Vue2 v2.6.14: https://v2.vuejs.org/
- Vue Router v3.5.1: https://v3.router.vuejs.org/
- Framework CSS - Bootstrap v5.3: https://getbootstrap.com/
- OMDb API: https://www.omdbapi.com/
- Encriptar de LocalStorage - Storage encryption v1.0.16: https://www.npmjs.com/package/encrypt-storage
- Axios - Cliente HTTP v1.3.6: https://axios-http.com/es/
- Animaciones - animate.css v4.1.1: https://animate.style/
- ESLint v7.32.0: https://www.npmjs.com/package/eslint
- Prettier v2.4.1: https://www.npmjs.com/package/prettier

### Description

1. Se realiza una analisís de los requerimientos de la prueba para ver que librerías /o herramientas emplear.
2. Se realiza la creación del proyecto con el CLI de vue para instalar la versión 2.
3. Se realiza la instalación y configuración de Vue-router, axios, bootstrap ESLint y Prettier y demás librerías.
4. Se realiza la revisión de la API de OMDb para ver como funciona y se crea el token/key para el consumo de la misma.
5. Se procede con la configuración de las rutas con "Vue-router".
6. Luego se realiza la creación de los componentes de Vue y se crea la estructura de las carpetas.
7. Se procede con la maquetación y estilizado de la aplicación utilizando HTML5 y CSS3 dentro de los componentes de Vue siguiendo la estrategia de "Mobile first" utilizando "Bootstrap" para dar los estilos.
8. Se configura un formulario con una caja de texto que servirá como parametro para obtener las películas y un botón "Search" que solo se activa cuando el usuario escribe algo. Para realizar la busqueda puede utilizar el botón o presionar "Enter".
9. Se crea un archivo ".env.local" donde se guarda en una variable de entorno el Token/Key de OMDb API que más tarde será utilizado por "Axios" para hacer las peticiones a OMDb API.
10. Se realiza el data fetching de OMDb API para obtener las películas según el texto escrito por el usuario utilizando "Axios".
11. Al realizar el data fetching OMDb API devuelve un Array de 10 objetos como respuesta con la información de las películas que fue solicitada por el usuario.
12. Se crea un componente "Card" para mostrar la infomación de cada película a través de la directiva "v-for" (ciclos), en dicha "Card" se muestra solo la "Poster" y el "Title" de la película.
13. Se configura la imagen "Poster" para que al hacer "hover" se muestre una animación y al dar clic sobre ella lleve al usuario a otra página donde podrá ver el detalle de la película.
14. Se crea una page para mostar el detalle de los datos de la película seleccionada, esta page tiene un boto para regresar a la página principal.

### Estructuras y directorios

- Toda la aplicación se encuentra dentro del directorio "src" el cual está configurado como "@" para una mejor referencia.
- La aplicación cuenta con un archivo llamado "main.js", en el cual se realizan las configuraciones principales de la aplicación como por ejemplo: Vue-router y los Estilos globales
- Junto al archivo "main.js" se encuentra el archivo "App.vue", este archivo se configuro para mostrar el "Navbar" y todas las "page/views" que necesite cargar el Vue-router.
- La aplicación cuenta con una carpeta llamada "views" en donde se guardan y configuran las page/vistas que tendrá la aplicación.
- En cada "page/views" encontraremos componentes donde tienen la configuración del HTML (template), la lógica Javascript (script) y los estilos 'locales' que necesita solo ese componente.
- La vista principal y que se utiliza como "home" es el componente "MoviesPage.vue", dicho componente lo encontramos en: "@/views/home/index.vue".
- En "views" también encontrarán "MovieDetails", aquí se carga toda la información detallada de la película.
- La carpeta "router" contiene la configuración de las rutas de la aplicación controlada por Vue-router, la views "movieDetails" está configurada para una carga perezosa o "lazy load".
- En la carpeta "components" están todos los componentes utilizados por las page/views "Home" y "MovieDetails" para mostrar la infomación respectiva, cada carpeta tiene 2 sub-carpetas: "Molecules" y "Atoms", las cuales solo contendrán la información de esa views y/o componente.
- Molecules: Contiene el componente que carga directamente la views y dentro de ella está los componentes requeridos para mostrar al usuario la infomación deseada.
- Atoms: Contiene las pequeñas piezas/sub-componentes que necesita la Molecules para mostrar la información.
- Dentro de la carpeta "components" encontramos los componentes de Home, MoviesDetails, Navbar y los componentes Globales que pueden ser usados por cualquier otro componente.
- La carpeta "hooks" simula un hook, en ella podemos encontar la lógica de un componente, en esta aplicaación solo se realizó 1 para mostar su funcionamiento y que se tiene el conocimiento.
- La carpeta "Services" contiene la configuración de "Axios" para hacer el data fetching y los endpoints a OMDb API para obtener la información de las películas, se configuro la baseURL de axios para no escribir toda la ruta cada que se realiza una petición.
- La carpeta "styles" contiene el archivo de estilos globales utilizados en la aplicación.
- La carpeta "utilities" contiene todas esas funciones que ayudan a realizar alguna acción, en este caso hay 2: "localStorage" para encryptar la información que se almacena en el "localStorage" y "convertTitleInSlug" que permite convertir el "Title" de una pelicula en "slug" para que la URL se amigable para el usuario.
- En la raíz de la aplicación se encuentra el archivo .env donde se guardan las variables de entorno para la conexión a OMDb API y la key para encriptar y descriptar la data del "localStorage".
- En la view "Home" se configuró un spin loading para mostar al usuario que la página está cargando y en la view MovieDetails se utilizó un "skeleton", otra manera de mostrar al usuario que la página está cargando.
- Cuando el usuario realiza la búsqueda de una película y la OMDb API devuelve una respuesta satisfactoria, ese texto de búsqueda se guarda en el localStorage como "last-search", cuando inicia la aplicación la aplicación busca en el "localStorage" si existe ese item, en caso de existir, la aplicación realiza la búsqueda de ese texto para mostrar la última búsqueda, en caso de no existir, se realiza la búsqueda de "batman" por defecto, esto le permite ver algo en la página y no una página sin resultados.
- Cuando el usuario ingresa al detalle de una película se toma el "ID" y se guarda en el localStorage, si el usuario recarga la página se toma ese "ID" y se realiza la búsqueda de esa película, con esta acción evitamos los errores de recarga.

### `Gracias por la oportunidad de demostrar mis conocimientos y mi forma de trabajar, disfrute mucho de hacer este projecto.`
