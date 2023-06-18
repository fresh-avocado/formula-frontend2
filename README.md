# Visor Formula 1

## Pasos para correrlo

```bash
docker build -t formula-frontend:1.0 -f ./Dockerfile.dev .  # construir la imagen
```

Una vez creada la imagen de `formula-frontend2` y `formula-backend`, correr el comando `docker-compose up` en el directorio donde está el archivo `docker-compose.yml`. El frontend correrá en `localhost:3000/`.

## Pasos para detenerlo

```bash
docker compose down
```
