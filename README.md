# Underwater Communication (uw_comm)

[![Netlify Status](https://api.netlify.com/api/v1/badges/0bf0aa8a-ee83-4276-93b4-34c46b612383/deploy-status)](https://app.netlify.com/sites/magical-starburst-2aeb52/deploys)

A static Astro/Starlight website that collects, organizes, and showcases documented information regarding the communication methods and specific messages that divers underwater and/or surface-supporting personnel may exchange during a recreational or professional dive.

## Development

Requires Node `>=22.12.0` and npm `>=9.6.5`.

```bash
npm install
npm run dev
```

The local development server runs on http://localhost:4321/.

## Build

```bash
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Docker

```bash
docker compose build
docker compose up
```

## Deployment

The website deploys to http://uwcomm.infonest.xyz/ via [Netlify](https://www.netlify.com/).

## License

The code and data is provided under a [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) license.
