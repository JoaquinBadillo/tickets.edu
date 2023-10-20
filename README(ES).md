## Uso

Para correr el proyecto localmente en du máquina será necesario [instalar](#instalacion) las dependencias y crear un archivo . `.env` para las [variables de ambiente](#variables_de_ambiente).

### Instalación <a name="instalacion"></a>

Este proyecto utiliza el manejador de paquetes `npm`. Es primordial que tenga npm instalado, esto se puede ver con el comando,

````console
npm --verison```

Si este está instalado y configurado adecuadamente debería de ver la versión el manejador de paquetes `x.y.z`.

Para instalar las dependencias ejecute el comando,

```console
npm i
````

en el directorio origen de su repositiorio (esto debido a que el archivo `package.json` se encuentra aquí).

### Variables de Ambiente <a name="variables_de_ambiente"></a>

Las variables de ambiente nos permiten compartir este repositorio sin exponer información sensible de nuestros servicios en terceros. Las variables del ambiente en cuestión deben de ser declaradas en el archivo `.env`:

- `VITE_API_URL`

Este es el link de la API (que será utilizado por el cliente), debido a esto es prudente utilizar un proxy en un ambiente productivo.

### Correr la aplicación de forma local

Si has seguido la guía a este punto estás listo para correr la aplicación, por favor ejecuta el comando en el directorio origen del repositorio:

```console
npm run dev
```

Deberías ver en la terminal al servidor vite corriendo así como un link para lanzar la aplicación web en un buscador a través del puerto.
