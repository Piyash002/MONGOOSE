import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentsRoutes } from './app/modules/students/student.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentsRoutes);

const getController = (req: Request, res: Response) => {
  const a = 10;
  console.log(a);

  res.send(a);
};
app.get('/', getController);

export default app;
// console.log(process.cwd());
