

const jwt_secret = process.env.JWT_SECRET;
const db_url = process.env.DATABASE_URL;


export const configs = {
    JWT_SECRET: jwt_secret,
    DB_URL: db_url
}