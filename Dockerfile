
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000



# // Lista
# * Instalar gitlab runner en la maquina virtual provista por la catedra (docker o binario)
# * config el repo de codigo y agregarle el nuevo gitlab runner instalado (1 y 3)

# * configurar el archivo de CI para que: 
#     - compile el proyecto
#     - corra los tests
#     - deploye la nueva imagen
