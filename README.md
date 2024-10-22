# CSSGRID

### HEADER

HTML

    <!DOCTYPE html>
    <html>
    <head>
      <title>CSS GRID</title>
    </head>
    <body>
      <header>
      <div class="logo">
        <h1>CSS GRID</h1>
      </div>
      <nav class="navbar">
        <ul>
          <li><a routerLink="studentlist">Student List</a></li>
          <li><a routerLink="employeelist">Employee List</a></li>
          <li><a routerLink="fruitlist">Fruit List</a></li>
          <li><a routerLink="courselist">Course List</a></li>
          <li><a routerLink="booklist">Booklist</a></li>
        </ul>
      </nav>
    </header>
    </body>
    <router-outlet></router-outlet>
    </html>

CSS

    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
      outline: none;
      border:none;
      text-decoration: none;
      font-family: "Georgia", serif;
    }
    
    body {
      background-color: #f4f4f4;
    }
    
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      background-color: #333;
      color: white;
    }
    
    .logo {
      display: flex;
      align-items: center;
    }
    
    .logo h1 {
      font-size: 23px;
      font-weight: bold;
      color: #3498db;
    }
    
    .navbar ul {
      list-style: none;
      display: flex;
      gap: 25px;
    }
    
    .navbar ul li a {
      text-decoration: none;
      color: white;
      font-size: 18px;
    }
    
    .navbar ul li a:hover {
      color: #3498db;
    }
    
## STUDENT LIST

HTML

    <!Doctype html>
    <html>
      <body>
        <h2>Student List</h2>
        <form>
          <label for="student">Enter a name: </label>
          <input name="student" id="student" type="text" [(ngModel)]="student" />
          <button (click)="addStudent()">Add Name</button>
        </form>
        <br>
    
        <h3>List of Student Names</h3>
        <div class="grid">
          <div *ngFor="let student of studentList; let i = index" class="card">
            <div>Student {{ i + 1 }}</div>
            <div>{{ student }}</div>
            <div>
              <button (click)="updateStudent(i)">Edit</button>
              <button (click)="deleteStudent(i)">Delete</button>
            </div>
          </div>
        </div>
      </body>
    </html>

TYPESCRIPT

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

SERVICE

    import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root'
    })
    export class StudentlistService {
      private studentList: string[] = ["Jenny", "Angeline"];
    
      getStudent(): string[]{
        return this.studentList;
      }
      addStudent(student: string): void{
        this.studentList.push(student);
      }
      updateStudent(index: number, student: string): void {
        if (index >= 0 && index < this.studentList.length) {
          this.studentList[index] = student;
        }
      }
      deleteStudent(index: number): void {
        if (index >= 0 && index < this.studentList.length) {
          this.studentList.splice(index, 1);
        }
      }
    }

CSS

    *{
      margin:0;
      padding:0;
      font-family: "Georgia", serif;
    }
    
    h2{
      padding: 10px;
      font-size: 30px;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .card {
      border: 1px solid #E4B1F0;
      border-radius: 8px;
      padding: 20px;
      background-color: #f9f9f9;
      text-align: center;
      font-size: 20px;
    }
    
    button{
      display: inline-block;
      margin: 5px;
      padding:5px 5px;
      cursor: pointer;
      color:black;
      background-color: #E4B1F0;
      font-size: 15px;
      border-radius: 5px;
    }


![Screenshot (5791)](https://github.com/user-attachments/assets/c5f11431-0dcc-4156-a373-3a0ece118bc1)

## EMPLOYEE LIST

HTML

    <!Doctype html>
    <html>
      <body>
        <h2>Employee List</h2>
        <form>
          <label for="employee">Enter a name: </label>
          <input name="employee" id="employee" type="text" [(ngModel)]="employee" />
          <button (click)="addEmployee()">Add Name</button>
        </form>
        <br>
    
        <h3>List of Employee Names</h3>
        <div class="grid">
          <div *ngFor="let employee of employeeList; let i = index" class="card">
            <div>Employee {{ i + 1 }}</div>
            <div>{{ employee }}</div>
            <div>
              <button (click)="updateEmployee(i)">Edit</button>
              <button (click)="deleteEmployee(i)">Delete</button>
            </div>
          </div>
        </div>
      </body>
    </html>
    
TYPESCRIPT

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
    
SERVICE

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

CSS

    *{
      margin:0;
      padding:0;
      font-family: "Georgia", serif;
    }
    
    h2{
      padding: 10px;
      font-size: 30px;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .card {
      border: 1px solid #E4B1F0;
      border-radius: 8px;
      padding: 20px;
      background-color: #f9f9f9;
      text-align: center;
      font-size: 20px;
    }
    
    button{
      display: inline-block;
      margin: 5px;
      padding:5px 5px;
      cursor: pointer;
      color:black;
      background-color: #E4B1F0;
      font-size: 15px;
      border-radius: 5px;
    }

![Screenshot (5792)](https://github.com/user-attachments/assets/0f0e29cf-267d-4835-b80d-1c33a5dca75d)

## FRUIT LIST

HTML

    <!Doctype html>
    <html>
      <body>
        <h2>Fruit List</h2>
        <form>
          <label for="fruit">Enter a fruit: </label>&nbsp;
          <input name="fruit" id="fruit" type="text" [(ngModel)]="fruit" />
          <button (click)="addFruit()">Add Fruit</button>
        </form>
        <br>
    
        <h3>List of Fruits</h3>
        <div class="grid">
          <div *ngFor="let fruit of fruitList; let i = index" class="card">
            <div>Fruit {{ i + 1 }}</div>
            <div>{{ fruit }}</div>
            <div>
              <button (click)="updateFruit(i)">Edit</button>
              <button (click)="deleteFruit(i)">Delete</button>
            </div>
          </div>
        </div>
      </body>
    </html>

TYPESCRIPT

    import { FruitlistService } from './../../services/fruitlist.service';
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-fruitlist',
      templateUrl: './fruitlist.component.html',
      styleUrl: './fruitlist.component.css'
    })
    export class FruitlistComponent {
      fruitList: string[] = [];
      fruit: string = '';
    
      constructor(private fruitlistService: FruitlistService){
      }
    
      ngOnInit(): void {
        this.fruitList = this.fruitlistService.getFruit();
      }
    
      addFruit(): void {
        this.fruitlistService.addFruit(this.fruit);
        this.fruit = '';
      }
    
      updateFruit(index: number): void {
        const currentName = this.fruitList[index];
        const newName = prompt('Enter new name for the fruit:', currentName);
        if (newName !== null && newName.trim() !== '') {
          this.fruitlistService.updateFruit(index, newName.trim());
        }
      }
    
      deleteFruit(index: number): void {
        this.fruitlistService.deleteFruit(index);
      }
    }

SERVICE

    import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root'
    })
    export class FruitlistService {
      private fruitList: string[] = ["apple", "mango"];
    
      getFruit(): string[]{
        return this.fruitList;
      }
      addFruit(fruit: string): void{
        this.fruitList.push(fruit);
      }
      updateFruit(index: number, fruit: string): void {
        if (index >= 0 && index < this.fruitList.length) {
          this.fruitList[index] = fruit;
        }
      }
      deleteFruit(index: number): void {
        if (index >= 0 && index < this.fruitList.length) {
          this.fruitList.splice(index, 1);
        }
      }
    }

CSS

    *{
      margin:0;
      padding:0;
      font-family: "Georgia", serif;
    }
    
    h2{
      padding: 10px;
      font-size: 30px;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .card {
      border: 1px solid #E4B1F0;
      border-radius: 8px;
      padding: 20px;
      background-color: #f9f9f9;
      text-align: center;
      font-size: 20px;
    }
    
    button{
      display: inline-block;
      margin: 5px;
      padding:5px 5px;
      cursor: pointer;
      color:black;
      background-color: #E4B1F0;
      font-size: 15px;
      border-radius: 5px;
    }

![Screenshot (5793)](https://github.com/user-attachments/assets/101f7ab2-285d-4408-9c0f-f716d0c9a77a)

## COURSE LIST

HTML

    <!Doctype html>
    <html>
      <body>
        <h2>Course List</h2>
        <form>
          <label for="course">Enter a course: </label>&nbsp;
          <input name="course" id="course" type="text" [(ngModel)]="course" />
          <button (click)="addCourse()">Add Course</button>
        </form>
        <br>
    
        <h3>List of Courses</h3>
        <div class="grid">
          <div *ngFor="let course of courseList; let i = index" class="card">
            <div>Course {{ i + 1 }}</div>
            <div>{{ course }}</div>
            <div>
              <button (click)="updateCourse(i)">Edit</button>
              <button (click)="deleteCourse(i)">Delete</button>
            </div>
          </div>
        </div>
      </body>
    </html>

TYPESCRIPT

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
    
SERVICE

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

CSS

    *{
      margin:0;
      padding:0;
      font-family: "Georgia", serif;
    }
    
    h2{
      padding: 10px;
      font-size: 30px;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .card {
      border: 1px solid #E4B1F0;
      border-radius: 8px;
      padding: 20px;
      background-color: #f9f9f9;
      text-align: center;
      font-size: 20px;
    }
    
    button{
      display: inline-block;
      margin: 5px;
      padding:5px 5px;
      cursor: pointer;
      color:black;
      background-color: #E4B1F0;
      font-size: 15px;
      border-radius: 5px;
    }

![Screenshot (5794)](https://github.com/user-attachments/assets/45e592b1-d3d0-4044-8f70-291c0badf60e)

## BOOKLIST

HTML

    <!Doctype html>
    <html>
      <body>
        <h2>Booklist</h2>
        <form>
          <label for="book">Enter a book: </label> &nbsp;
          <input name="book" id="book" type="text" [(ngModel)]="book" />
          <button (click)="addBook()">Add Book</button>
        </form>
        <br>
    
        <h3>List of Books</h3>
        <div class="grid">
          <div *ngFor="let book of bookList; let i = index" class="card">
            <div>Book {{ i + 1 }}</div>
            <div>{{ book }}</div>
            <div>
              <button (click)="updateBook(i)">Edit</button>
              <button (click)="deleteBook(i)">Delete</button>
            </div>
          </div>
        </div>
      </body>
    </html>

TYPESCRIPT

    import { BooklistService } from './../../services/booklist.service';
    import { Component } from '@angular/core';
    
    @Component({
      selector: 'app-booklist',
      templateUrl: './booklist.component.html',
      styleUrl: './booklist.component.css'
    })
    export class BooklistComponent {
      bookList: string[] = [];
      book: string = '';
    
      constructor(private booklistService: BooklistService){
      }
    
      ngOnInit(): void {
        this.bookList = this.booklistService.getBook();
      }
    
      addBook(): void {
        this.booklistService.addBook(this.book);
        this.book = '';
      }
    
      updateBook(index: number): void {
        const currentName = this.bookList[index];
        const newName = prompt('Enter new name for a book:', currentName);
        if (newName !== null && newName.trim() !== '') {
          this.booklistService.updateBook(index, newName.trim());
        }
      }
    
      deleteBook(index: number): void {
        this.booklistService.deleteBook(index);
      }
    }

SERVICE

    import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root'
    })
    export class BooklistService {
      private bookList: string[] = ["Noli Me Tangere", "El filibusterismo" ];
    
      getBook(): string[]{
        return this.bookList;
      }
      addBook(book: string): void{
        this.bookList.push(book);
      }
      updateBook(index: number, book: string): void {
        if (index >= 0 && index < this.bookList.length) {
          this.bookList[index] = book;
        }
      }
      deleteBook(index: number): void {
        if (index >= 0 && index < this.bookList.length) {
          this.bookList.splice(index, 1);
        }
      }
    }

CSS

    *{
      margin:0;
      padding:0;
      font-family: "Georgia", serif;
    }
    
    h2{
      padding: 10px;
      font-size: 30px;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .card {
      border: 1px solid #E4B1F0;
      border-radius: 8px;
      padding: 20px;
      background-color: #f9f9f9;
      text-align: center;
      font-size: 20px;
    }
    
    button{
      display: inline-block;
      margin: 5px;
      padding:5px 5px;
      cursor: pointer;
      color:black;
      background-color: #E4B1F0;
      font-size: 15px;
      border-radius: 5px;
    }

![Screenshot (5795)](https://github.com/user-attachments/assets/d1620bc6-f778-480d-93ae-fb7aa020afd2)
