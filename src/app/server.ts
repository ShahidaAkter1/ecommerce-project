
// import { Server } from "http";
// import app from "./app";

// const port = 5000;


// let server: Server; //server type declare comes frome http module

// async function bootstrap() {
//   server = app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// }

// bootstrap();



import app from './app';
import config from './config';
import mongoose from 'mongoose';


async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    //here config.port comes from index.js file
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
