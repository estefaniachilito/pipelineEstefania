# Actividad 2 - Pipeline CI/CD y GitHub Pages

## Pasos realizados

1. Actualicé el proyecto para usar `@sveltejs/adapter-static` en lugar de `@sveltejs/adapter-auto`.
2. Convertí la carga de datos de `src/routes/+page.server.ts` a `src/routes/+page.ts` para que el sitio pueda ejecutarse como aplicación estática client-side.
3. Agregué el workflow de GitHub Actions en `.github/workflows/pipeline.yml`.
4. El pipeline ejecuta `npm ci` y `npm run build` en la etapa de `build`.
5. El pipeline publica automáticamente los artefactos estáticos en la rama `gh-pages` con `peaceiris/actions-gh-pages@v4`.

## Cómo funciona el pipeline

- `on: push` en la rama `main` dispara el pipeline.
- La etapa `build` instala dependencias y genera los archivos estáticos.
- La etapa `deploy` reutiliza el repositorio, vuelve a instalar dependencias, reconstruye el sitio y publica el directorio `build` en `gh-pages`.
- GitHub Pages debe configurarse con la rama `gh-pages` como origen de publicación.

## Recomendaciones para completar la entrega

- Subir este repositorio a tu cuenta de GitHub.
- Activar GitHub Pages en la configuración del repositorio: `gh-pages` / `root`.
- Verificar la URL pública: `https://TU_USUARIO.github.io/NOMBRE_REPO`.
- Si necesitas entregar un PDF o Word, exporta este markdown y súbelo junto con el enlace al repositorio y al sitio publicado.
