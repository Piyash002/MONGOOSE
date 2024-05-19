import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudendsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudendsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudendsFromDB,
  getSingleStudendsFromDB,
};
