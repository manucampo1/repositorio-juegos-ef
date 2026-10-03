# Repositorio de Juegos de Educación Física

Versión preparada para publicar como sitio estático en Vercel. Incluye los 222 juegos, todas sus imágenes y los creadores de ejercicios, sesiones y situaciones de aprendizaje.

## Publicar desde GitHub y Vercel

1. Descomprime el ZIP.
2. Crea un repositorio nuevo en GitHub y sube **el contenido de esta carpeta** a la raíz del repositorio.
3. En Vercel, selecciona **Add New → Project** e importa ese repositorio.
4. En **Framework Preset**, elige **Other**.
5. Deja **Root Directory** como `./`.
6. Deja vacíos **Build Command** y **Output Directory**: `index.html` ya está en la raíz.
7. Pulsa **Deploy**.

## Actualizar la web

Sustituye los archivos modificados en GitHub y confirma los cambios. Vercel volverá a publicar automáticamente.

## Comprobación local opcional

Con Node.js instalado:

```bash
npm run check
```

Debe mostrar que existen 222 juegos y que no hay títulos duplicados.

## Guardado de sesiones y ejercicios

Los ejercicios propios, sesiones y situaciones de aprendizaje se guardan en el almacenamiento local del navegador. Por ello, cada dispositivo y navegador conserva sus propios datos.
