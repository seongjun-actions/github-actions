# Dockerfile은 앱을 구동하는데 필요한 환경설정, 라이브러리 설치, 명령어 등이 기술되어 있다.
FROM node:18 
WORKDIR /app
COPY my-app/package*.json ./
RUN npm install
COPY my-app/ ./
EXPOSE 3000
CMD ["npm", "start"]
