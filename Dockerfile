# Multi-stage build: install, generate Prisma client, build, then copy artifacts to a slimmer final image
FROM node:lts AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . .
# Install openssl (some base images may not include it) and generate Prisma client and build the Nest app
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npm run build

FROM node:lts-slim
WORKDIR /app
ENV NODE_ENV=production
# Ensure OpenSSL is available in the final image
RUN apt-get update -y && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
# Copy package files and production node_modules from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
# Copy built app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
EXPOSE 3000
CMD ["node", "dist/main"]