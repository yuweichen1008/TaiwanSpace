This is a Taiwan Space repo

0. Integrat with Prisma + Postgre
1. Get boba tea restaurant
2. Get twitter topic
3. Get facebook post

## Getting Starter

For Mac, use Postgres.app + Postico2 ( optional )

To install Prisma
```
npm init -y
npm install prisma typescript ts-node @types/node --save-dev
```

MAPBOX 
Create `.env.local` file to set API keys
```.env.local
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
```

Create `.env.twitter` file to set Twitter API keys
```
TWITTER_CONSUMER_KEY=Details ➡️ API key 
TWITTER_CONSUMER_SECRET=Details ➡️ API secret key 
TWITTER_ACCESS_TOKEN=Details ➡️ Access token 
TWITTER_ACCESS_TOKEN_SECRET=Details ➡️ Access token secret 
TWITTER_WEBHOOK_ENV=Your env label
```

### Development

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
