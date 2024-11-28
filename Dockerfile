# Використовуємо офіційний Node.js образ
FROM node:20-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json і package-lock.json (або yarn.lock)
COPY package*.json ./

# Встановлюємо всі залежності
RUN npm install

# Копіюємо весь код проекту
COPY . .

# Відкриваємо порт (наприклад, 3000)
EXPOSE 3000

# Запускаємо команду для старту додатка
CMD ["npm", "run", "dev"]
