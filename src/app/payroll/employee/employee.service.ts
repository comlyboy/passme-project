import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { NotificationsService } from 'src/app/shared/notifications.service';
import { environment } from 'src/environments/environment';
import { IEmployee, IDepartment, IEmployeeDeduction, IEmployeeEarning, IEmployeeGrade, IEmployeeType, IEmployeeNok } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  key = localStorage.getItem('key');

  API_URL = environment.API_URL
  employees: IEmployee[] = []
  departments: IDepartment[] = []
  employeeDeduction: IEmployeeDeduction[] = []
  employeeEarning: IEmployeeEarning[] = []
  employeeGrade: IEmployeeGrade[] = []
  employeeType: IEmployeeType[] = []


  genders: any[] = [];
  marital_statuses: any[] = []
  qualifications_types: any[] = []
  relationships_types: any[] = []
  bank_types: any[] = []




  constructor(
    private http: HttpClient,
    private router: Router,
    public notificationsService: NotificationsService
  ) { }

  // ===========================

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




  // ===============================

  getAllDepartmentsUpdateListener() {
    return this.allDepartmentsUpdated.asObservable();
  }
  getAllEmployeeDeductionUpdateListener() {
    return this.allDepartmentsUpdated.asObservable();
  }
  getAllEmployeeEarningsUpdateListener() {
    return this.allDepartmentsUpdated.asObservable();
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

  addDepartment(name: string, description: string) {
    const deptData = {
      name: name,
      description: description
    };
    this.http.post(`${this.API_URL}payroll/${this.key}/employees/`, deptData)
      .subscribe(response => {


      }, error => {
        console.log(error)
      });
  }


  // +++++++++++++++++++++++++
  // employee
  private allEmployeesUpdated = new Subject<{
    allEmployees: IEmployee[];
  }>();

  getAllEmployeesUpdateListener() {
    return this.allEmployeesUpdated.asObservable();
  }
  getEmployee() {
    this.http.get<any>(
      `${this.API_URL}payroll/${this.key}/employees/`
    )
      .subscribe(employeeData => {
        this.employees = employeeData
        this.allEmployeesUpdated.next({
          allEmployees: [...this.employees]
        });
      }, error => {
        console.log(error)
      });
  }

  getEmployeeDetails(id: string) {
    return this.http.get<any>(`${this.API_URL}payroll/${this.key}/employees/${id}`);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.API_URL}payroll/${this.key}/employees/${id}`);
  }


  addEmployee(
    firstname: string,
    lastname: string,
    middlename: string,
    email: string,
    dateofBirth: string,
    phone: string,
    country: string,
    marital_status: number,
    gender: number,
    address: string,

    nokName: string,
    nokPhoneNumber: string,
    nokEmail: string,
    nokRelationship: number,
    nokAddress: string,

    institutionName: string,
    graduateYear: string,
    qualificationType: number,

    accountName: string,
    accountNumber: string,
    bankName: number,

  ) {
    const employeeData: IEmployee = {
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      email: email,
      dateofBirth: dateofBirth,
      phone: phone,
      country: country,
      marital_status: marital_status,
      gender: gender,
      address: address,
    };


    console.log(employeeData)

    this.http.post<IEmployee>(`${this.API_URL}payroll/${this.key}/employees/`, employeeData)
      .subscribe(response => {
        let employeeId = response.id
        if (nokName && nokPhoneNumber && nokEmail && institutionName && graduateYear && qualificationType && accountName && accountNumber && bankName) {

          this.addEmployeeNok(nokName, nokPhoneNumber, nokEmail, nokRelationship, nokAddress, employeeId)

          this.addEmployeeQualification(institutionName, graduateYear, qualificationType, employeeId)

          this.addPaymentDetails(accountName, accountNumber, bankName, employeeId)
        } else {
          console.log("parameters missing")
          this.notificationsService.success(`${response.firstname} successfully added!!`)
          // this.router.navigate(['payroll/employee']);
        }

      }, error => {
        console.log(error)
      });
  }



  addEmployeeNok(
    nokName: string,
    nokPhoneNumber: string,
    nokEmail: string,
    nokRelationship: number,
    nokAddress: string,
    employeeId: string
  ) {
    const nokData: IEmployeeNok = {
      name: nokName,
      contact_number: nokPhoneNumber,
      contact_email: nokEmail,
      relationship_type: nokRelationship,
      address: nokAddress

    };
    console.log(nokData)
    this.http.post(`${this.API_URL}payroll/${this.key}/next_of_kin/${employeeId}/`, nokData)
      .subscribe(response => {
        
      }, error => {
        console.log(error)
      });
  }


  // ++++++++++++++++++++++++
  addEmployeeQualification(
    institutionName: string,
    graduateYear: string,
    qualificationType: number,
    employeeId: string
  ) {
    const qualificationData = {
      institution_attended: institutionName,
      year_of_graduation: graduateYear,
      qualification_type: qualificationType
    };
    console.log(qualificationData)
    this.http.post(`${this.API_URL}payroll/${this.key}/qualifications/${employeeId}/`, qualificationData)
      .subscribe(response => {

      }, error => {
        console.log(error)
      });
  }


  addPaymentDetails(
    accountName: string,
    accountNumber: string,
    bankName: number,
    employeeId: string
  ) {
    const paymentData = {
      account_name: accountName,
      account_number: accountNumber,
      bank: bankName
    };
    this.http.post(`${this.API_URL}payroll/${this.key}/salary_account_info/${employeeId}/`, paymentData)
      .subscribe(response => {
        this.notificationsService.full()
        this.router.navigate(['payroll/employee']);

      }, error => {
        console.log(error)
      });
  }













  // ++++++++++++++++++++++++++++
  // Gender
  private allGenderUpdated = new Subject<{
    allGenders: any[];
  }>();

  getAllGenderUpdateListener() {
    return this.allGenderUpdated.asObservable();
  }

  getGenders() {
    this.http.get<any>(
      `${this.API_URL}payroll/${this.key}/genders/`
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

  addGender(name: string) {
    const newGenderData = {
      name: name
    };
    this.http.post<any>(
      `${this.API_URL}payroll/${this.key}/genders/`, newGenderData
    )
      .subscribe(response => {
        this.notificationsService.success(`${response.name} added!!!`);
        this.getGenders()
      }, error => {
        console.log(error)
      });
  }


  // +++++++++++++++++++++++++++
  // marital statuses
  private allMaritalStatusUpdated = new Subject<{
    allMaritals: any[];
  }>();

  getAllMaritalStatusUpdateListener() {
    return this.allMaritalStatusUpdated.asObservable();
  }

  getMaritalStatus() {
    this.http.get<any>(
      `${this.API_URL}payroll/${this.key}/marital_status/`
    )
      .subscribe(maritalData => {
        this.marital_statuses = maritalData
        this.allMaritalStatusUpdated.next({
          allMaritals: [...this.marital_statuses]
        });
      }, error => {
        console.log(error)
      });
  }

  addMaritalStatus(name: string) {
    const newMaritalData = {
      name: name
    };
    this.http.post<any>(
      `${this.API_URL}payroll/${this.key}/marital_status/`, newMaritalData
    )
      .subscribe(response => {
        this.notificationsService.success(`${response.name} added!!!`);
        this.getMaritalStatus()
      }, error => {
        console.log(error)
      });
  }


  // +++++++++++++++++++++++++++
  // Relationship
  private allRelationshipStatusUpdated = new Subject<{
    allRelationship: any[];
  }>();

  getAllRelationshipStatusUpdateListener() {
    return this.allRelationshipStatusUpdated.asObservable();
  }

  getRelationships() {
    this.http.get<any>(
      `${this.API_URL}payroll/${this.key}/relationship_types/`
    )
      .subscribe(relatnData => {
        this.relationships_types = relatnData
        this.allRelationshipStatusUpdated.next({
          allRelationship: [...this.relationships_types]
        });
      }, error => {
        console.log(error)
      });
  }

  addRelationship(name: string) {
    const newRelatnData = {
      name: name
    };
    this.http.post<any>(
      `${this.API_URL}payroll/${this.key}/relationship_types/`, newRelatnData
    )
      .subscribe(response => {
        this.notificationsService.success(`${response.name} added!!!`);
        this.getRelationships()
      }, error => {
        console.log(error)
      });
  }



  // +++++++++++++++++++++++++++
  // Qualification
  private allQualificationStatusUpdated = new Subject<{
    allQualifications: any[];
  }>();

  getAllQualificationStatusUpdateListener() {
    return this.allQualificationStatusUpdated.asObservable();
  }

  getQualifications() {
    this.http.get<any>(
      `${this.API_URL}payroll/${this.key}/qualification_types/`
    )
      .subscribe(qualData => {
        this.qualifications_types = qualData
        this.allQualificationStatusUpdated.next({
          allQualifications: [...this.qualifications_types]
        });
      }, error => {
        console.log(error)
      });
  }

  addQualification(name: string) {
    const newQualData = {
      name: name
    };
    this.http.post<any>(
      `${this.API_URL}payroll/${this.key}/qualification_types/`, newQualData
    )
      .subscribe(response => {
        this.notificationsService.success(`${response.name} added!!!`);
        this.getQualifications()
      }, error => {
        console.log(error)
      });
  }



  // +++++++++++++++++++++++++++
  // Banks
  private allBankStatusUpdated = new Subject<{
    allBanks: any[];
  }>();

  getAllBankStatusUpdateListener() {
    return this.allBankStatusUpdated.asObservable();
  }

  getBanks() {
    this.http.get<any>(
      `${this.API_URL}organization/${this.key}/banks/`
    )
      .subscribe(bankData => {
        this.bank_types = bankData
        this.allBankStatusUpdated.next({
          allBanks: [...this.bank_types]
        });
      }, error => {
        console.log(error)
      });
  }

  addBank(name: string) {
    const newBankData = {
      name: name
    };
    this.http.post<any>(
      `${this.API_URL}organization/${this.key}/banks/`, newBankData
    )
      .subscribe(response => {
        this.notificationsService.success(`${response.name} added!!!`);
        this.getBanks()
      }, error => {
        console.log(error)
      });
  }



}
