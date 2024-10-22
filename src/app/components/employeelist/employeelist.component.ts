import { EmployeelistService } from './../../services/employeelist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit{
  employeeList: string[] = ["John Doe", "Jane Doe"];
  employee: string = '';

  constructor(private employeelistService: EmployeelistService){
  }

  ngOnInit(): void {
    this.employeeList = this.employeelistService.getEmployee();
  }

  addEmployee(): void {
    this.employeelistService.addEmployee(this.employee);
    this.employee = '';
  }

  updateEmployee(index: number): void {
    const currentName = this.employeeList[index];
    const newName = prompt('Enter new name for the employee:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.employeelistService.updateEmployee(index, newName.trim());
    }
  }

  deleteEmployee(index: number): void {
    this.employeelistService.deleteEmployee(index);
  }
}
