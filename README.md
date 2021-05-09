# Gentleman App Community
Bienvenido al repositorio de la aplicación de la comunidad de Gentleman Programming

Esta aplicación es el resultado final de un evento lanzado dentro de la comunidad de discord, la cual debe de contar con lo siguiente puntos:

- debe tener una pantalla de presentación.

- debe de tener un sector donde se puedan mostrar los vídeos del canal, buscar por medio de un input un determinado nombre que puede representar un vídeo o una lista de reproducción.

- debe de presentar una pantalla explicando la comunidad con un texto (pueden usar el del canal de información) y fotos de la misma (pueden mostrar o en secciones, en un carousel, etc !)

## Comenzando
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos
Es necesario que tengas intalado lo siguiente para el funcionamiento correcto de la aplicación:
- node js
- expo-cli
- algún manejador/gestor de paquetes (yarn o npm)
- Emulador de IOS o android **(Opcional)**
- Algún celular con la aplicación de Expo Go **(Opcional)**

Nota: Expo permite probar la aplicación en cualquier navegador web, pero esta aplicación no funciona en un navegador, ya que una de las dependencias solo funciona para android y IOS.
### Instalación
Primero es necesario descargar el proyecto, esto se puede hacer descargando el proyecto comprimido desde github o con la siguiente comando: 
> git clone https://github.com/mvera35/GentlemanApp.git

Una vez que se tenga una copia del proyecto es necesario instalar las dependencias, con npm se hace de la siguiente forma:
> npm install

O bien con yarn:
> yarn 
//También se puede instalar con este comando
yarn install

Una vez terminada la instalación se puede iniciar la aplicación con cualquiera de los siguiente comandos:
- Esto inicia las herramientas del proyecto, si se quiere usar un dispositivo físico esto muestra un código QR que se escanea con la aplicación Expo Go.

> expo start

- Para iniciarlo en un emulador android (Es necesario tener el emulador corriendo)

> expo start --android

- Para iniciarlo en un emulador IOS (Es necesario tener el emulador corriendo)

> expo start --ios

### Construido con
Esta aplicación fue construida con las siguientes tecnologías:
- node js
- expo-cli

### Autor
- Vera Vicente Jesús Maximiliano - [mvera35](https://github.com/mvera35 "mvera35")

### Agradecimientos
Un agradecimiento a la comunidad de Gentleman Programming por el apoyo y la retroalimentación a lo largo del desarrollo de este proyecto.
