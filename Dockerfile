
FROM node:18-alpine AS build
WORKDIR /src
COPY . .
RUN yarn install --production
CMD ["node", "index.js"]
EXPOSE 33000

FROM nginx:1.23 AS deploy
COPY --from=build /src/static/
/usr/share/nginx/html/

# // Lista
# * Instalar gitlab runner en la maquina virtual provista por la catedra (docker o binario)
# * config el repo de codigo y agregarle el nuevo gitlab runner instalado (1 y 3)

# * configurar el archivo de CI para que: 
#     - compile el proyecto
#     - corra los tests
#     - deploye la nueva imagen
