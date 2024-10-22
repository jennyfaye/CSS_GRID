import { CourselistService } from './../../services/courselist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courseList: string[] = [];
  course: string = '';

  constructor(private courselistService: CourselistService){
  }

  ngOnInit(): void {
    this.courseList = this.courselistService.getCourse();
  }

  addCourse(): void {
    this.courselistService.addCourse(this.course);
    this.course = '';
  }

  updateCourse(index: number): void {
    const currentName = this.courseList[index];
    const newName = prompt('Enter new name for the course:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.courselistService.updateCourse(index, newName.trim());
    }
  }

  deleteCourse(index: number): void {
    this.courselistService.deleteCourse(index);
  }
}
