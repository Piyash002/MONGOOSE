import express from 'express';
import { StudentsController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentsController.createStudent);
router.get('/', StudentsController.getAllStudends);
router.get('/:studentId', StudentsController.getSingleStudends);
export const StudentsRoutes = router;
