# Exámen Para Desarrollador Frontend - Mobile / Almundo

La API REST está desarrollada con tecnologías Node.js, Express y MongoDB como base de datos.

## Pre-requisitos

Se debe tener instalado [NodeJs](https://nodejs.org/es/download/) y [MongoDB](https://www.mongodb.com/download-center#atlas) en el equipo, pero para mayor facilidad se creo una base de datos en https://mlab.com/ y se agregó la cadena de conexión en el archivo `main.ts`.



## Instalación

1. Clonar el proyecto digitando el siguiente comando en la consola: 

```
https://github.com/johe8809/hotels-app-backend.git
```
2. Ejecutar el siguiente comando para instalar los paquetes que se encuentran en el package.json

```
npm install
```

3. Luego ejecutamos los siguientes comandos para arrancar la aplicación:

```
npm run build
npm start
```

## Probar 

Para probar que todo este correctamente, copiar y pegar la url [http://localhost:3000/api/hotels](http://localhost:3000/api/hotels) en el navegador lo cual hará una petición GET y retorá un JSON.

Tambien puede usar Postman para realizar todas las operaciones del CRUD.

```
http://localhost:3000/api/hotels (GET - Retorna todos los hoteles)
http://localhost:3000/api/hotels/id (GET - Retorna un hotel)
http://localhost:3000/api/hotels (POST - Inserta un hotel en la base de datos)
http://localhost:3000/api/hotels/id (PUT - Actualiza un hotel en la base de datos)
http://localhost:3000/api/hotels/id (DELETE - Elimina un hotel en la base de datos)
```

