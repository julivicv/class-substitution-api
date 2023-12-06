import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {PrismaClient, Coordinator, Subject, User, Class, Course, ElectiveCycle, Manager, Request, Teacher} from "@prisma/client";
import {Offer, TeacherElectiveCycle} from "./types";

const prisma: PrismaClient = new PrismaClient();

@Controller("teacher")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    prisma.subject
    return this.appService.getHello();
  }

  @Post("/create/subject")
  createSubject(@Body() body: Subject): Promise<Subject> {
    return this.appService.createSubject(body);
  }

  @Post("/create/user")
  createUser(@Body() body: User): Promise<User> {
    return this.appService.createUser(body);
  }

  @Post("/create/teacher")
  createTeacher(@Body() body: Teacher): Promise<Teacher> {
    return this.appService.createTeacher(body);
  }

  @Post("/create/course")
  createCourse(@Body() body: Course): Promise<Course> {
    return this.appService.createCourse(body);
  }

  @Post("/create/class")
  createClass(@Body() body: Class): Promise<Class> {
    return this.appService.createClass(body);
  }

  @Post("/create/elective-cycle")
  createElectiveCycle(@Body() body: ElectiveCycle): Promise<ElectiveCycle> {
    return this.appService.createElectiveCycle(body);
  }

  @Post("/create/teacher-elective-cycle")
  createTeacherElectiveCycle(@Body() body: TeacherElectiveCycle): Promise<TeacherElectiveCycle> {
    return this.appService.createTeacherElectiveCycle(body);
  }

  @Post("/create/manager")
  createManager(@Body() body: Manager): Promise<Manager> {
    return this.appService.createManager(body);
  }

  @Post("/create/offers")
  createOffers(@Body() body: Offer): Promise<Offer> {
    return this.appService.createOffers(body);
  }

  @Post("/create/request")
  createRequest(@Body() body: Request): Promise<Request> {
    return this.appService.createRequest(body);
  }

}
