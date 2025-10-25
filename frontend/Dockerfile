# Nginx für statische Dateien
FROM nginx:alpine

# Kopiere deine HTML/CSS/JS Dateien
COPY . /usr/share/nginx/html

# Port 80 freigeben
EXPOSE 80

# Starte Nginx
CMD ["nginx", "-g", "daemon off;"]
