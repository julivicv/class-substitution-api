import { HttpException, HttpStatus, Injectable, } from '@nestjs/common';
import { PrismaClient, Subject as SubjectModel } from '@prisma/client'
import {
  Subject,
  User,
  Teacher,
  Course,
  Class,
  ElectiveCycle,
  Teacher_elective_cycle,
  Manager,
  Offers,
  Request,
} from '@prisma/client';
import bcrypt from "bcrypt";

const prisma : PrismaClient = new PrismaClient()  

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createSubject(data: Subject): Promise<Subject>{
    return await prisma.subject.create({data});
  }

  async createUser(data: User): Promise<User>{

    const userEmailExists = await prisma.user.findUnique({
      select:{
        email: true
      },
      where: {
        email: data.email
      }
    })

    if(userEmailExists){
      throw new HttpException("Este usuário já existe", HttpStatus.FORBIDDEN)
    }

    const hash = await bcrypt.hash(data.password_hash, 12);

    return await prisma.user.create({
      data: {
        ...data,
        password_hash: hash
      }
    });
  }

  async createTeacher(data: Teacher): Promise<Teacher> {
    return prisma.teacher.create({ data });
  }

  async createCourse(data: Course ): Promise<Course> {
    return prisma.course.create({ data });
  }

  async createClass(data: Class): Promise<Class> {
    return prisma.class.create({ data });
  }

  async createElectiveCycle(data: ElectiveCycle): Promise<ElectiveCycle> {
    return prisma.electiveCycle.create({ data });
  }

  async createTeacherElectiveCycle(data: Teacher_elective_cycle ): Promise<Teacher_elective_cycle> {
    return prisma.teacher_elective_cycle.create({ data });
  }

  async createManager(data: Manager): Promise<Manager> {
    return prisma.manager.create({ data });
  }

  async createOffers(data: Offers): Promise<Offers> {
    return prisma.offers.create({ data });
  }

  async createRequest(data: Request): Promise<Request> {
    return prisma.request.create({ data });
  }

   
}