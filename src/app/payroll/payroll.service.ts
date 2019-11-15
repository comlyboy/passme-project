import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { NotificationsService } from 'src/app/shared/notifications.service';
import { environment } from 'src/environments/environment';
import { IEmployee, IDepartment, IEmployeeDeduction, IEmployeeEarning, IEmployeeGrade, IEmployeeType } from '../interfaces';



@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  API_URL = environment.API_URL
  employees: IEmployee[] = []
  departments: IDepartment[] = []
  employeeDeduction: IEmployeeDeduction[] = []
  employeeEarning: IEmployeeEarning[] = []
  employeeGrade: IEmployeeGrade[] = []
  employeeType: IEmployeeType[] = []
  genders: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    public notificationsService: NotificationsService
  ) { }

  // ===========================
  private allEmployeesUpdated = new Subject<{
    allEmployees: IEmployee[];
  }>();
  private allDepartmentsUpdated = new Subject<{
    allDepartments: IDepartment[];
  }>();
  private allEmployeeDeductionUpdated = new Subject<{
    allEmployeeDeductions: IEmployeeDeduction[];
  }>();
  private allEmployeeEarningsUpdated = new Subject<{
    allEmployeeEarnings: IEmployeeEarning[];
  }>();
  private allEmployeeGrade = new Subject<{
    allEmployeesGrades: IEmployeeGrade[];
  }>();


  private allGenderUpdated = new Subject<{
    allGenders: any[];
  }>();


  // ===============================
  getAllEmployeesUpdateListener() {
    return this.allEmployeesUpdated.asObservable();
  }
  getAllDepartmentsUpdateListener() {
    return this.allDepartmentsUpdated.asObservable();
  }
  getAllEmployeeDeductionUpdateListener() {
    return this.allDepartmentsUpdated.asObservable();
  }
  getAllEmployeeEarningsUpdateListener() {
    return this.allDepartmentsUpdated.asObservable();
  }


  getAllGendersUpdateListener() {
    return this.allGenderUpdated.asObservable();
  }


  // Departments ==================

  getDepartment() {
    this.http.get<IDepartment>(
      `${this.API_URL}organization/urrencies/`
    )
      .subscribe(departmentsData => {
        console.log(departmentsData)
        // this.department = departmentsData;
        this.allDepartmentsUpdated.next({
          allDepartments: [...this.departments]
        });
      }, error => {
        console.log(error)
      });
  }

  addDepartment() {

  }

  // employee =====================

  getEmployee() {
    const key = localStorage.getItem('key');

    this.http.get<any>(
      `${this.API_URL}payroll/${key}/employees/`
    )
      .subscribe(employeeData => {
        console.log(employeeData)
        this.employees = employeeData
        this.allEmployeesUpdated.next({
          allEmployees: [...this.employees]
        });
      }, error => {
        console.log(error)
      });
  }

  addEmployee(
    firstname: string,
    lastname: string,
    middlename: string,
    phone: string,
    gender: number,
    dateofBirth: string,
    country: string,
    address: string,

  ) {
    const key = localStorage.getItem('key');

    const employeeData: IEmployee = {
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      phone: phone,
      gender: gender,
      dateofBirth: dateofBirth,
      country: country,
      address: address
    };
    console.log(employeeData)
    this.http.post(`${this.API_URL}payroll/${key}/employees/`, employeeData)
      .subscribe(response => {
        console.log(response)
        this.notificationsService.success("Employee added!!")
      }, error => {
        console.log(error)
      });



  }





  getGender() {
    const key = localStorage.getItem('key');

    this.http.get<any>(
      `${this.API_URL}/payroll/${key}/genders/`
    )
      .subscribe(genderData => {
        this.genders = genderData
        this.allGenderUpdated.next({
          allGenders: [...this.genders]
        });
      }, error => {
        console.log(error)
      });
  }


}
