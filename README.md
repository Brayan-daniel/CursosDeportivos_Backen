
# CursosDeportivos_Backend – Tecnologías en Internet

API RESTful desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB**, que implementa **autenticación JWT**, **encriptación de contraseñas**, y operaciones **CRUD** para usuarios y productos.

---

##  **Descripción general**

Este backend forma parte del proyecto web de la asignatura **Tecnologías en Internet**.  
Su objetivo es proporcionar un servicio API funcional y seguro, con manejo de usuarios autenticados mediante **tokens JWT**, conexión a base de datos MongoDB y estructura modular en TypeScript.

---

## **Características principales**

✅ API RESTful estructurada en módulos  
✅ Autenticación y autorización con **JWT**  
✅ Encriptación de contraseñas con **bcryptjs**  
✅ Manejo de variables de entorno con **dotenv**  
✅ Base de datos **MongoDB** (vía Mongoose)  
✅ Validación de ID segura para evitar `CastError`  
✅ Código organizado con **TypeScript** y **modularización limpia**  


## ⚡ **Instalación y ejecución**

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/usuario/CursosDeportivos_Backend.git
cd CursosDeportivos_Backend
````

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Crear archivo `.env`

Copia el ejemplo:

```bash
cp .env.example .env
```

Y completa con tus valores.

### 4️⃣ Ejecutar en modo desarrollo

```bash
npm run dev
```

## Variables de entorno

Archivo `.env.example`:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/cursosdeportivosdb
JWT_SECRET=supersecreto

## Autenticación JWT

1. El usuario se registra con `POST /api/auth/register`.
2. Luego inicia sesión con `POST /api/auth/login` y obtiene un token JWT.
3. El token debe enviarse en cada solicitud protegida dentro del encabezado:

   ```
   Authorization: Bearer <token>
   ```


