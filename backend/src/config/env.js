import "dotenv/config.js"

export const ENV = {
    PORT: process.env.PORT || 5001,
    MONGO_URI: process.env.MONGO_URI || "random_mongo_uri",
    NODE_ENV: process.env.NODE_ENV,
}