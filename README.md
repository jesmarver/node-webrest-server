
# RESTWeb

Este proyecto es un ejemplo de implementación de una web con API REST. El proyecto está escrito en typescript usando Node.js y express para la creación del servidor. Se aplica patrón repositorio, arquitectura limpia, base de datos postgres en docker, control de rutas...


## API REST
Se accede a la API REST mediante la ruta /api/todos

### Métodos
- GET `/`: Se obtienen todos los TODOS.


- GET `/:id`: Se obtiene el TODO con el id que se le proporcione por la ruta.


- POST `/`: Se crea el TODO con el id que se le proporcione por la ruta. El cuerpo de la petición debe contener la propiedad `text`.


- PUT `/:id`: Se actualiza el TODO con el id que se le proporcione por la ruta. El cuerpo de la petición debe contener la propiedad `text`.


- DELETE `/:id`: Se elimina el TODO con el id que se le proporcione por la ruta.


# Dev
1. Clonar el .env.template y crear el .env
2. Instalar las dependencias
    ```
    npm i
    ```
3. Iniciar base de datos
    ```
    docker compose up -d
    ```
4. Arrancar el proyecto
    ```
    npm run dev
    ```

## Demo
Se puede acceder a la demo del proyecto en producción mediante la siguiente ruta:


https://node-webrest-server-production-148b.up.railway.app