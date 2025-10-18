
# CursosDeportivos_Backend – Tecnologías en Internet

API RESTful desarrollada con Node.js, Express, TypeScript y MongoDB, que implementa autenticación JWT, encriptación de contraseñas, y operaciones CRUD para usuarios y productos.


## Descripción general

Este backend forma parte del proyecto web de la asignatura Tecnologías en Internet.
Su objetivo es proporcionar un servicio API funcional y seguro, con manejo de usuarios autenticados mediante tokens JWT, conexión a base de datos MongoDB, y una estructura modular en TypeScript.

##  Características principales

* API RESTful estructurada en módulos
* Autenticación y autorización con JWT
* Encriptación de contraseñas con bcryptjs
* Manejo de variables de entorno con dotenv
* Base de datos MongoDB (vía Mongoose)
* Validación de ID segura para evitar `CastError`
* Código organizado y modular con TypeScript


##  Instalación y ejecución

1️⃣ Clonar el repositorio**
git clone [https://github.com/Brayan-daniel/CursosDeportivos_Backen.git](https://github.com/Brayan-daniel/CursosDeportivos_Backen.git)
cd CursosDeportivos_Backend

2️⃣ Instalar dependencias**
npm install

3️⃣ Crear archivo `.env`**
Copia el ejemplo `.env.example` y completa tus valores reales.

4️⃣ Ejecutar en modo desarrollo**
npm run dev


## Variables de entorno

Ejemplo de archivo `.env.example`:

PORT=4000
MONGO_URI=mongodb://localhost:27017/cursosdeportivosdb
JWT_SECRET=supersecreto


## Endpoints principales

### Autenticación (`/api/auth`)

* POST /api/auth/register → Registro de usuario con cifrado de contraseña
* POST /api/auth/login → Inicio de sesión, retorna token JWT


### 👥 Usuarios (`/api/users`)

* GET /api/users → Listar todos los usuarios (sin contraseñas) — requiere token
* DELETE /api/users/:id → Eliminar un usuario por ID — requiere token


###  Productos (`/api/products`)

* GET /api/products → Listar todos los productos
* POST /api/products → Crear un nuevo producto — requiere token
* PUT /api/products/:id → Actualizar un producto — requiere token
* DELETE /api/products/:id → Eliminar un producto — requiere token


## Autenticación JWT

1. El usuario se registra con POST /api/auth/register.
2. Luego inicia sesión con POST /api/auth/login y obtiene un token JWT.
3. En las rutas protegidas, el token debe enviarse en el encabezado HTTP:
   Authorization: Bearer `<tu_token_aquí>`

## Pruebas con Postman

La API fue probada con Postman, utilizando una colección de peticiones organizadas por módulos:

* Auth: pruebas de registro y login.
* Users: obtener y eliminar usuarios.
* Products: crear, listar, actualizar y eliminar productos.

Incluye en la entrega capturas de pantalla de Postman mostrando las peticiones y respuestas exitosas de cada módulo.
También puedes adjuntar la colección exportada `CursosDeportivos_Backend.postman_collection.json`.


## Tecnologías utilizadas

* Node.js v18+ → Entorno de ejecución
* Express.js → Framework web (gestión de rutas, peticiones y respuestas HTTP)
* TypeScript → Tipado estático y modularidad
* MongoDB / Mongoose → Base de datos NoSQL
* JWT (jsonwebtoken) → Autenticación basada en tokens
* bcryptjs → Cifrado de contraseñas
* dotenv → Variables de entorno
* ts-node-dev → Ejecución en modo desarrollo
