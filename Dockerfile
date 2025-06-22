FROM oven/bun:1.1.29-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
# Install dependencies
COPY package.json ./
COPY bun.lockb* ./
RUN bun install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build
# Create a static export of the site
RUN bun run next export || mkdir -p out && cp -r .next/static out/ && cp -r public/* out/

# Use Nginx to serve static files
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Copy the static output from builder
COPY --from=builder /app/out .
# Copy custom Nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# No need for environment variables since we're serving static files
CMD ["nginx", "-g", "daemon off;"]
