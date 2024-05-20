 

// import express from 'express'

// const app = express()
 

// app.get('/', (req, res) => {
//   res.send('Hello world   Jewel')
// })

// export default app;



import express, { Application, Request, Response } from 'express';
import cors from 'cors';
 
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
app.use(express.text());

//application routes
// app.use('/api/v1/students',StudentsRoutes)//go which routes identify 



app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.json({
    message:'hello world jewel'
  });
});

export default app;
