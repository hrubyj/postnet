FROM node:alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat && apk add --no-cache openjdk11
WORKDIR /app/client
COPY ./postnet-client/package.json ./postnet-client/yarn.lock ./
COPY ./postnet-client/packages/postnet/package.json ./packages/postnet/package.json
COPY ./postnet-client/packages/postnet-api ./packages/postnet-api
COPY ./postnet-server/api.yml ../postnet-server/api.yml
RUN yarn install --frozen-lockfile


#   Builder container creating production build
FROM node:alpine AS builder
WORKDIR /app/client
COPY ./postnet-client/ .
COPY --from=deps /app/client/node_modules ./node_modules
COPY --from=deps /app/client/packages/postnet/node_modules ./packages/postnet/node_modules
COPY --from=deps /app/client/packages/postnet-api ./packages/postnet-api
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline


# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app/client

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./

COPY --from=builder /app/client/packages/postnet/public ./packages/postnet/public
COPY --from=builder --chown=nextjs:nodejs /app/client/packages/postnet/.next ./packages/postnet/.next
COPY --from=builder /app/client/node_modules ./node_modules
COPY --from=builder /app/client/packages/postnet/node_modules ./packages/postnet/node_modules
COPY --from=builder /app/client/packages/postnet/package.json ./packages/postnet/package.json
COPY --from=builder /app/client/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /app/client/packages/postnet
CMD ["node_modules/.bin/next", "start"]