FROM node:20-alpine AS builder
WORKDIR /staging
COPY . /staging/
RUN corepack enable && \
    npm install --frozen-lockfile && \
    npm run build && \  ## npm run prune --prod

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /staging/package.json /staging/package-lock.json  /app/
COPY --from=builder /staging/node_modules /app/node_modules
COPY --from=builder /staging/build /app/build

EXPOSE 3000
CMD ["node", "-r", "dotenv/config", "/app/build/index.js"]