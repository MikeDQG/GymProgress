FROM node:22-bookworm-slim
ENV NODE_ENV=production HOST=0.0.0.0
WORKDIR /app
COPY package.json package-lock.json ./
COPY backend/package.json backend/package.json
RUN npm ci --omit=dev --workspace=backend && npm cache clean --force
COPY backend/dist backend/dist
ARG APP_REVISION
ENV APP_REVISION=$APP_REVISION
USER node
CMD ["node", "backend/dist/server.js"]
