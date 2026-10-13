# Portal de Socios — Talleres Filial Capital Federal

Portal web para los socios de una filial de hinchas de Talleres de Córdoba. Permite registrarse verificando el número de socio contra el padrón de la filial, mantenerse al día con partidos, noticias y eventos, participar en un foro, hablar directamente con la comisión y, del lado de los administradores, gestionar todo desde un panel propio.

> **Versión demo.** Este repositorio no contiene datos reales, claves ni configuración de producción. La versión que corre en producción es privada porque maneja datos personales de los socios. Las partes sensibles del sistema (envío masivo de mails, control de intentos de login, traspaso de datos entre sitios) no se incluyen: en el código figuran solo como indicación de dónde van. Tampoco se incluye el esquema de la base de datos.

## El problema que resuelve

Una filial necesita saber quién es socio, comunicarse con todos y mantenerlos informados, y normalmente eso se resuelve con grupos de WhatsApp y planillas sueltas. Este portal ordena todo en un solo lugar:

- **El socio** se registra una vez, ve lo que pasa en la filial y tiene un canal directo con la comisión.
- **La comisión** administra el padrón, publica novedades y modera la comunidad.
- **Los demás sitios de la filial** (viajes y tienda) reutilizan la identidad del socio sin pedirle que cargue sus datos de nuevo.

## Funcionalidades

### Acceso y registro
- Registro con nombres, apellidos, DNI, fecha de nacimiento, teléfono y **número de socio verificado contra el padrón**.
- Ingreso con email y contraseña o con Google.
- Recuperación de contraseña mediante un código enviado por email.
- Opción de recibir novedades por email, editable desde la cuenta.
- Avatar único generado para cada socio a partir de su identificador.

### Portal del socio
- Próximos partidos de Talleres, con escudos.
- Noticias de la filial con fotos.
- Calendario con eventos de la filial y cumpleaños de los socios, en formato carrusel.
- Notificaciones dentro del portal.
- Buzón de sugerencias.
- Chat directo con la filial, con indicador de mensajes sin leer.
- **Mi cuenta:** edición de datos personales y cambio de la contraseña del portal y de la tienda.
- Alta como vendedor de la tienda de la filial (producto o servicio).

### Foro
- Publicaciones y respuestas entre socios.
- Moderación por parte de los administradores: al eliminar una publicación se exige un motivo, que le llega al autor.

### Panel de administración
- **Noticias:** publicación con múltiples fotos.
- **Socios y padrón:** listado de socios y carga del padrón completo desde un archivo Excel.
- **Partidos:** alta de partidos con selector de escudos (Primera División, Primera Nacional y femenino).
- **Calendario:** eventos de la filial.
- **Sugerencias y mensajes:** lectura del buzón y atención de las conversaciones con los socios, con cierre de chat.
- **Foro:** moderación.
- **Envío de mails a los socios**, con imágenes, opción de enviar solo a quienes aceptaron novedades, confirmación previa e historial de envíos.

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | HTML, CSS y JavaScript (módulos ES, sin framework) |
| Autenticación | Supabase Auth (email y contraseña, Google, código por email) |
| Base de datos y storage | Supabase (PostgreSQL, funciones RPC, Storage) |
| Importación de padrón | SheetJS (Excel) |

## Seguridad

Se prestó atención a no exponer datos y a reducir la superficie de ataque:

- Sin secretos en el repositorio: el cliente usa únicamente la clave publicable de Supabase.
- Las operaciones sensibles (envío masivo de mails, control de intentos de login, traspaso de datos a otros sitios) se resuelven en la base de datos y no se incluyen en el repositorio.
- Páginas de administración restringidas por rol.
- Redirecciones posteriores al login limitadas a dominios permitidos.
- Escape de HTML en el contenido escrito por usuarios y en los mails.
- Mensajes de error genéricos en el login.
- Recuperación de contraseña con código de un solo uso.

## Ejecución local

Es un sitio estático. Completá `supabaseClient.js` con los datos de tu propio proyecto de Supabase y servilo con cualquier servidor estático:

```bash
npx serve .
```

Como el demo no incluye el esquema de la base ni las funciones sensibles, sirve para recorrer la interfaz y el código, no para correr el sistema completo.

## Estructura

```
index.html                  Redirección al login
login.html                  Ingreso (email, Google)
registro.html               Registro verificado contra el padrón
recuperar.html              Recuperación de contraseña
portal-de-socios.html       Portal principal del socio
mi-cuenta.html              Datos personales y contraseñas
foro.html                   Foro de socios y moderación
vender-registro.html        Alta de vendedores de la tienda
recuperar-clave-tienda.html Cambio de clave de la tienda
admin.html                  Panel de administración
enviar-mail.html            Mails a los socios
supabaseClient.js           Cliente compartido y utilidades
escudos-data.js             Listado de escudos disponibles
Escudos_ARG/                Escudos para cargar partidos
estilos.css                 Estilos compartidos
```

## Autor

**Danilo Ramallo** — Estudiante de Ingeniería Electrónica · Desarrollo web y ciberseguridad

[LinkedIn](https://www.linkedin.com/in/danilo-ramallo-9877a6289)
