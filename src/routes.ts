import { Request, Response } from "express";
import CreateCourseservice from "./CreateCourseservice";

export function createCourse(request: Request, response: Response) {
  CreateCourseservice.execute("NodeJs", 10, "Dani");

  return response.send();
}
