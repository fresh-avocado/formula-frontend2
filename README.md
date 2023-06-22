# Visor Formula 1

## Pasos para correrlo

```bash
docker build -t formula-frontend:1.0 -f ./Dockerfile.dev .  # construir la imagen
```

Una vez creada la imagen de `formula-frontend2` y `formula-backend`, correr el comando `docker-compose up` en el directorio donde está el archivo `docker-compose.yml`. El frontend correrá en `localhost:3000/`.

## Pasos para detenerlo

```bash
docker compose down # borrará los datos de la BD
```

## Notas

- No me alcanzó el tiempo para usar [Tailwind](https://tailwindcss.com/), pero hubiera sido ideal dado que, por ejemplo, tengo varios `display: flex` repetidos lo cual implica que cuando el web server le mande el CSS al navegador del usuario, se mandarán más bytes por la red y la página se demorará más en cargar. Mientras que Tailwind lo declararía una sola vez.
