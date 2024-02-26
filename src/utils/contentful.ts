import { createClient } from 'contentful';

if(!process.env.SPACE || !process.env.ACCESS_TOKEN) {
    throw new Error("Contentful space and access token must be provided");
}

export const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN
});