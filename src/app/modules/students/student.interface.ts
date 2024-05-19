export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  matherName: string;
  matherOccupation: string;
  matherContactNo: string;
};
export type Name = {
  firstname: string;
  middlename: string;
  lastname: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  adress: string;
};

export type Student = {
  id: string;
  name: Name;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  BloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permenantAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
