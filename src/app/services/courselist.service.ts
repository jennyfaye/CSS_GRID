import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {
  private courseList: string[] = ["BSIT", "BSTM"];

  getCourse(): string[]{
    return this.courseList;
  }
  addCourse(course: string): void{
    this.courseList.push(course);
  }
  updateCourse(index: number, course: string): void {
    if (index >= 0 && index < this.courseList.length) {
      this.courseList[index] = course;
    }
  }
  deleteCourse(index: number): void {
    if (index >= 0 && index < this.courseList.length) {
      this.courseList.splice(index, 1);
    }
  }
}
