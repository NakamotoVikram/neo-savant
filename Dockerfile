FROM nodejs:10

EXPOSE 8080

COPY . /savant-ide

WORKDIR /savant-ide
RUN npm install
ENTRYPOINT npm run serve

#ENTRYPOINT NODE_ENV=production SCILLA_VERSION=0 npm run start

#c699770f095f3c38bf1f7e1bba853dfcadcce98d