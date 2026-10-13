# Web Restaurante Mery — publicación y panel de edición

## Qué hay en esta carpeta
- index.html, eventos.html, grupos.html, legal.html — páginas de la web
- styles.css — diseño (colores, tipografías, espaciados)
- content/ — contenido editable desde el panel:
  - carta.json — carta (categorías, platos, precios)
  - grupos.json — menús de grupo
  - fotos.json — fotos de la portada y de la cuadrícula de Instagram
  - textos.json — textos de la web en español, catalán e inglés
- images/ — fotos y logotipos
- menu/ — PDFs de la carta y de los menús de grupo
- admin/ — panel de edición con usuario y contraseña

## Puesta en marcha (una sola vez, unos 20 minutos)
1. Crear una cuenta en github.com con el email del restaurante.
2. Crear un repositorio nuevo, por ejemplo "mery-web", y subir el contenido de esta carpeta (botón "Add file → Upload files", arrastrar todo).
3. Crear una cuenta en netlify.com con esa misma cuenta de GitHub.
4. En Netlify: "Add new site → Import an existing project → GitHub" y elegir "mery-web". Sin build command; carpeta de publicación: la raíz. Deploy.
5. En Netlify, en el sitio: Site configuration → Identity → Enable Identity.
6. En Identity → Registration: elegir "Invite only".
7. En Identity → Services: activar "Git Gateway".
8. En Identity → "Invite users": invitar los emails de quienes vayan a editar (Raquel, equipo...).
9. Cada persona recibe un email, crea su contraseña y ya puede entrar.

## Cómo editar (uso diario)
- Entrar en https://www.meryrestaurante.com/admin
- Iniciar sesión con email y contraseña.
- Secciones del panel:
  - Carta — añadir, quitar, reordenar platos y cambiar precios.
  - Menús de grupo — precios y platos de cada menú.
  - Fotos — cambiar las fotos de la portada y de Instagram.
  - Textos e idiomas — todos los textos de la web en ESP, CAT y EN.
- Pulsar "Publicar". La web se actualiza sola en 1–2 minutos.

## Conectar el dominio meryrestaurante.com
En Netlify: Domain management → Add a domain → meryrestaurante.com.
En el panel DNS del dominio (Google Domains / Squarespace Domains):
- Registro A, host @ → 75.2.60.5 (sustituye a los 4 registros A actuales de Squarespace)
- Registro CNAME, host www → [nombre-del-sitio].netlify.app
No borrar los registros MX (son el correo).

## Notas
- La tipografía Bw Gradual incluida es versión demo; para uso comercial hay que licenciarla o sustituirla.
- Si en el futuro Netlify Identity no estuviera disponible, el panel funciona igual cambiando la línea "backend" de admin/config.yml por el servicio DecapBridge (decapbridge.com), que también ofrece acceso con email y contraseña.
