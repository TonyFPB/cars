// import pg from "pg";
import pkg from '@prisma/client'
import dotenv from "dotenv";
dotenv.config();

const { PrismaClient } = pkg
const prisma = new PrismaClient()

export default prisma

// const { Pool } = pg;
// const configDatabase = {
//   connectionString: process.env.DATABASE_URL
// };

// const db = new Pool(configDatabase);
// export default db;