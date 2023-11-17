import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {PrismaClient} from "@prisma/client";
import {Subject} from "./types";

const prisma: PrismaClient = new PrismaClient();

@Controller("teacher")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    prisma.subject
    return this.appService.getHello();
  }

  @Post("/create")
  createSubject(@Body() body: Subject) : Promise<Subject> {
    return this.appService.createSubject(body);
  }


}
