# Repositorio de Juegos de Educación Física

Versión completa con 300 juegos, imágenes, repositorio y creadores de ejercicios, sesiones y situaciones de aprendizaje.

## Subirlo mediante GitHub

1. Descomprime el ZIP.
2. Sube **el contenido de esta carpeta** a la raíz de tu repositorio de GitHub. Deben verse `dist`, `scripts` y `vercel.json` en la página principal del repositorio.
3. En Vercel, elige **Add New > Project** e importa ese repositorio.
4. Selecciona **Framework Preset: Other**.
5. No escribas ningún comando de instalación ni de compilación.
6. `vercel.json` ya establece `dist` como **Output Directory**.
7. Pulsa **Deploy**.

## Actualizar una versión anterior

Sustituye en GitHub todos los archivos y carpetas por los de este paquete, conservando la carpeta `.git` si trabajas con GitHub Desktop. Después realiza **Commit to main** y **Push origin**. Vercel iniciará el despliegue automáticamente.

## Comprobación local opcional

Ejecuta `node scripts/check-duplicates.mjs` desde la carpeta principal. El resultado esperado es: `Comprobación correcta: 300 juegos y ningún título duplicado.`
