FROM node:18-alpine

# Arbeitsverzeichnis erstellen
WORKDIR /app

# Package files kopieren
COPY package*.json ./

# Dependencies installieren
RUN npm install --production

# App-Code kopieren
COPY . .

# Port freigeben
EXPOSE 3000

# App starten
CMD ["node", "server.js"]
