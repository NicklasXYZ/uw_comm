# Underwater Communication (uw_comm)

A static Astro/Starlight website that collects, organizes, and showcases documented information regarding the communication methods and specific messages that divers underwater and/or surface-supporting personnel may exchange during a recreational or professional dive.

The website version is defined in `package.json` and displayed discreetly in the site footer. The dataset freshness date is tracked separately in `data/data.json`.

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

## Versioning

Use npm's version command to update the website version and create a matching Git tag.

```bash
npm version patch
git push --follow-tags
```

Use `minor` or `major` instead of `patch` for larger releases.

## Container Image

The production image is a multi-stage build: Node builds the Astro static site, then an unprivileged Nginx webserver serves the generated `dist/` files on port `8080`.

Build the image:

```bash
docker build -t uw-comms:latest .
```

Run the image:

```bash
docker run --rm -p 8080:8080 uw-comms:latest
```

Then open http://localhost:8080/.

## Docker Compose

```bash
docker compose up --build
```

The host port can be changed with `UW_COMMS_PORT`.

```bash
UW_COMMS_PORT=4321 docker compose up --build
```

## Podman

The same image works with Podman.

```bash
podman build -t uw-comms:latest .
podman run --rm -p 8080:8080 uw-comms:latest
```

If using `podman compose`, the included `docker-compose.yml` can be reused.

## Production Deployment

Push the image to your chosen registry and deploy it with Docker Compose, Podman, or Kubernetes. The container listens on port `8080`; expose that port through your reverse proxy, ingress, or load balancer.

## License

The code and data is provided under a [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) license.
