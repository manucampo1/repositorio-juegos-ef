# Repositorio de Juegos de Educación Física

Proyecto completo preparado para desplegarse en Vercel.

## Contenido

- 144 juegos y ejercicios de Educación Física.
- 134 ilustraciones en formato WebP.
- Buscador y filtros del repositorio.
- Favoritos.
- Creador y editor de ejercicios propios.
- Creador de sesiones con Calentamiento, Parte principal y Vuelta a la calma.
- Creador de Situaciones de Aprendizaje.
- Guardado y apertura de copias en formato JSON.
- Generación de PDF mediante la función de impresión del navegador.
- Modo polideportivo adaptado a móvil.

La web está dentro de la carpeta `public`. Los datos de los 144 juegos están incluidos en `public/app.js` y las ilustraciones en `public/images/games`.

## Publicación recomendada: GitHub y Vercel

1. Descomprime este ZIP en tu ordenador.
2. Entra en https://github.com y crea un repositorio nuevo.
3. Dentro del repositorio, pulsa **Add file > Upload files**.
4. Sube el contenido de la carpeta descomprimida: `public`, `vercel.json` y `README.md`.
5. Confirma la subida con **Commit changes**.
6. Entra en https://vercel.com y accede con tu cuenta.
7. Pulsa **Add New > Project**.
8. Selecciona **Import Git Repository** e importa el repositorio de GitHub.
9. En **Framework Preset**, elige **Other** si Vercel no lo selecciona automáticamente.
10. No escribas ningún comando de compilación. La configuración incluida indica que la web está en `public`.
11. Pulsa **Deploy**.
12. Cuando termine, Vercel mostrará la dirección pública de la web.

Para actualizarla más adelante, sustituye en GitHub los archivos modificados. Vercel publicará automáticamente una nueva versión.

## Alternativa: publicación con Vercel CLI

Necesitas tener Node.js instalado. Abre una terminal dentro de esta carpeta y ejecuta:

```bash
npx vercel login
npx vercel --prod
```

La primera vez, acepta la configuración propuesta. `vercel.json` se encarga de usar la carpeta `public`.

## Funcionamiento del guardado

La aplicación no necesita base de datos ni servidor. Los favoritos, las sesiones, las Situaciones de Aprendizaje y los ejercicios creados por el profesor se guardan en el almacenamiento local del navegador.

Esto significa que:

- Los 144 juegos incluidos estarán disponibles para todas las personas que visiten la web.
- Lo que cada profesor cree o edite permanecerá en su dispositivo y navegador.
- Los datos no se sincronizan automáticamente entre ordenador, tableta y móvil.
- Para cambiar de dispositivo se debe utilizar **Guardar en el ordenador** y después **Abrir copia**.
- Borrar los datos del navegador puede eliminar la información local si antes no se ha descargado una copia.

## Prueba antes de publicar

Puedes abrir `public/index.html` directamente, aunque algunas funciones del navegador trabajan mejor desde un servidor web. La comprobación definitiva debe hacerse en la dirección que proporcione Vercel.
