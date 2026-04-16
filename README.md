# Prueba Lectiva

Base SvelteKit con arquitectura `feature-first/domain-first` para integrar la API de Rick and Morty.

## Run

```bash
npm install
npm run dev
```

## Check

```bash
npm run check
npm run build
```

## CI/CD y GitHub Pages

El proyecto incluye un workflow GitHub Actions en `.github/workflows/pipeline.yml` que:

- instala dependencias con `npm ci`
- construye el sitio con `npm run build`
- publica los archivos de `build` en la rama `gh-pages`

Para usar GitHub Pages, configura tu repositorio para publicar desde la rama `gh-pages`.

## Estructura

- `src/lib/core`: cliente HTTP, configuracion y adaptadores.
- `src/lib/entities`: tipos y mapeos de dominio.
- `src/lib/features`: features por caso de uso.
- `src/routes`: composicion de rutas y carga de datos.
