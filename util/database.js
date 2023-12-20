// import { DB_URL } from '@/Config';
import sql from "mssql";

const config = {
    user: 'sa',
    password: 'taha8700',
    server: 'DESKTOP-1VSRS2B',
    database: 'blog-post',
    options: {
        trustServerCertificate: true, // trust self-signed certificates
        enableArithAbort: true,
      },
  };

export const connectSql = async () => {
  try {
    await sql.connect(config);
    console.log("Database connected sql");
  } catch (err) {
    console.log(err);
  }
};

export const disconnect = async () => {
  try {
    await sql.close();
    console.log("Database closed");
  } catch (err) {
    console.log(err);
  }
}




