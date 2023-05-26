# Instalacion gestor de paquetes yarn
~~~
yarn install
~~~

# Instalacion de vite y seguir los pasos
~~~
yarn create vite
~~~

# Instalaciones de babel y lest para React con Vite:
~~~
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 

yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
~~~
### Opcional: Si usamos Fetch API en el proyecto:
~~~
yarn add --dev whatwg-fetch
~~~
### Actualizar los scripts del package.json
~~~
scripts: {
  ...
  "test": "jest --watchAll"
}
~~~
### Crear la configuración de babel babel.config.js
~~~
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
~~~
### Opcional, pero eventualmente necesario, crear Jest config y setup:
~~~
jest.config.js

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
~~~
###  En caso de necesitar la implementación del FetchAPI
~~~
jest.setup.js


import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
~~~

# Extensiones de jest.config.js y babel.config.js cambiarlas a cjs las dos

### Arrancar el test
~~~
yarn test
~~~

### Happy Coding ;)