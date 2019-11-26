import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/app/interfaces';
import { PayrollService } from '../../payroll.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: string = "";
  employee: any;
  next_kins: any[] = [];
  qualifications: any[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public payrollService: PayrollService

  ) { }

  initContents() {
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.employeeId = paramMap.get('employeeId');
        this.payrollService.getEmployeeDetails(this.employeeId)
          .subscribe(employeeData => {
            console.log(employeeData)
            this.employee = {
              id: employeeData.id,
              firstname: employeeData.firstname,
              lastname: employeeData.lastname,
              middlename: employeeData.middlename,
              phone: employeeData.phone,
              gender: employeeData.gender,
              country: employeeData.country,
              date_created: employeeData.date_created,
              dateofBirth: employeeData.dateofBirth,
              email: employeeData.email,
              marital_status: employeeData.marital_status,
              address: employeeData.address,
            };
            this.next_kins = employeeData.nextofkin_set;
            this.qualifications = employeeData.employeequalification_set;

          });
      });
  }
  ngOnInit() {
    this.initContents()
  }

}
