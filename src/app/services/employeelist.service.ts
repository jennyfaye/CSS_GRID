import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {
  private employeeList: string[] = ["John Doe", "Jane Doe"];

  getEmployee(): string[]{
    return this.employeeList;
  }
  addEmployee(employee: string): void{
    this.employeeList.push(employee);
  }
  updateEmployee(index: number, employee: string): void {
    if (index >= 0 && index < this.employeeList.length) {
      this.employeeList[index] = employee;
    }
  }
  deleteEmployee(index: number): void {
    if (index >= 0 && index < this.employeeList.length) {
      this.employeeList.splice(index, 1);
    }
  }
}
