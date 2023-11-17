import { Injectable, } from '@nestjs/common';
import { PrismaClient, Subject as SubjectModel } from '@prisma/client'
import {Subject} from "./types"

const prisma : PrismaClient = new PrismaClient()  

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createSubject(data: Subject): Promise<Subject>{
    return await prisma.subject.create({data});
  }
   
}
