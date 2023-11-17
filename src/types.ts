import { DateTime } from "luxon";

interface Subject {
  id: number;
  name: string;
  createdAt: DateTime;
  updatedAt: DateTime;
//ta comentado pra teste

  // offers: Offer[];
  // RequestedSubject: Request[];
  // SubstituteSubject: Request[];
  // Request: Request[];
}



interface User {
  id: number;
  email: string;
  password_hash: string;
  role: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  teachers: Teacher[];
}

interface Teacher {
  id: number;
  siape: string;
  name: string;
  user: User;
  userId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  coordinators: Coordinator[];
  electiveCycleTeachers: TeacherElectiveCycle[];
  managers: Manager[];
  offers: Offer[];
  requestedByTeacher: Request[];
  substituteForTeacher: Request[];
  assignedToRequests: Request[];
}

interface Coordinator {
  id: number;
  start: number;
  end: number;
  course: Course;
  courseId: number;
  teacher: Teacher;
  teacherId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  requests: Request[];
}

interface Course {
  id: number;
  name: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  classes: Class[];
  coordinators: Coordinator[];
}

interface Class {
  id: number;
  name: string;
  course: Course;
  courseId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  offers: Offer[];
  requests: Request[];
}

interface ElectiveCycle {
  id: number;
  year: number;
  half_yearly: number;
  start: number;
  end: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  electiveCycleTeachers: TeacherElectiveCycle[];
  offers: Offer[];
  requests: Request[];
}

interface TeacherElectiveCycle {
  id: number;
  teacher: Teacher;
  teacherId: number;
  electiveCycle: ElectiveCycle;
  electiveCycleId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

interface Manager {
  id: number;
  start: number;
  end: number;
  level: number;
  teacher: Teacher;
  teacherId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  requests: Request[];
}

interface Offer {
  id: number;
  teacher: Teacher;
  teacherId: number;
  class: Class;
  classId: number;
  electiveCycle: ElectiveCycle;
  electiveCycleId: number;
  subject: Subject;
  subjectId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

interface Request {
  id: number;
  date: DateTime;
  hour: number;
  justify: string;
  annex: string;
  type: string;
  knowledgeSubstitute: string;
  managerAuthorization: string;
  knowledgeManager: string;
  knowledgeCoordinator: string;
  teacherRequested: Teacher;
  teacherRequestId: number;
  teacherSubstitute: Teacher;
  teacherSubstituteId: number;
  cycle: ElectiveCycle;
  cycleId: number;
  subjectRequested: Subject;
  subjectRequestId: number;
  subjectSubstitute: Subject;
  subjectSubstituteId: number;
  class: Class;
  classId: number;
  manager: Manager;
  managerId: number;
  coordinator: Coordinator;
  coordinatorId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  assignedTeacher: Teacher | null;
  teacherId: number | null;
  Subject: Subject | null;
  subjectId: number | null;
}

export {
  Subject,
  User,
  Teacher,
  Coordinator,
  Course,
  Class,
  ElectiveCycle,
  TeacherElectiveCycle,
  Manager,
  Offer,
  Request,
};
