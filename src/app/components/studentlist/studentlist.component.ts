import { StudentlistService } from './../../services/studentlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent implements OnInit{
  studentList: string[] = [];
  student: string = '';

  constructor(private studentlistService: StudentlistService){
  }

  ngOnInit(): void {
    this.studentList = this.studentlistService.getStudent();
  }

  addStudent(): void {
    this.studentlistService.addStudent(this.student);
    this.student = '';
  }

  updateStudent(index: number): void {
    const currentName = this.studentList[index];
    const newName = prompt('Enter new name for the student:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.studentlistService.updateStudent(index, newName.trim());
    }
  }

  deleteStudent(index: number): void {
    this.studentlistService.deleteStudent(index);
  }
}
