import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudends = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudendsFromDB();
    res.status(200).json({
      success: true,
      message: 'students are retrieve successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudends = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudendsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is retrieve successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentsController = {
  createStudent,
  getAllStudends,
  getSingleStudends,
};
