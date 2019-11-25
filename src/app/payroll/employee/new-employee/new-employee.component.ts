import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../payroll.service';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  maritalMode = "add"
  viewMode = "add"
  qualificationMode = "add"
  relatnMode = "add"
  paymentMode = "add"

  genders: any[] = [];
  marital_statuses: any[] = []
  relationship_types: any[] = []
  qualification_types: any[] = []
  bank_types: any[] = []


  private genderSub: Subscription;
  private maritalSub: Subscription;
  private relatnSub: Subscription;
  private qualificationSub: Subscription;
  private bankSub: Subscription;

  constructor(
    public employeeService: EmployeeService
  ) { }


  onSubmitBank(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employeeService.addBank
      (form.value.inputBank_name)
    this.paymentMode = "add"
  }


  onSubmitRelation(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employeeService.addRelationship
      (form.value.input_relationship)
    this.relatnMode = "add"
  }

  onSubmitQualificationType(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employeeService.addQualification
      (form.value.inputQualification_type)
    this.qualificationMode = "add"
  }

  onSubmitMarital(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employeeService.addMaritalStatus
      (form.value.inputMarital_status)
    this.maritalMode = "add"
  }

  onSubmitGender(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employeeService.addGender
      (form.value.input_gender)
    this.viewMode = "add"
  }


  onSubmitEmployee(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    this.employeeService.addEmployee
      (
        form.value.inputFirstName,
        form.value.inputLastName,
        form.value.inputMiddleName,
        form.value.inputDOB,
        form.value.inputPhoneNumber,
        form.value.inputCountry,
        form.value.inputMaritalStatus,
        form.value.inputGender,
        form.value.inputAddress,

        form.value.inputNokName,
        form.value.inputNokPhoneNumber,
        form.value.inputNokEmail,
        form.value.inputNokRelationship,
        form.value.inputNokAddress,

        form.value.inputInstitutionName,
        form.value.inputGraduationYear,
        form.value.inputQualificationType,

        form.value.inputAccountName,
        form.value.inputAccountNumber,
        form.value.inputBankName,
      );
    console.log(form.value.inputDOB
    )
  }

  initContent() {
    this.employeeService.getGenders()
    this.genderSub = this.employeeService.getAllGenderUpdateListener()
      .subscribe(genderData => {
        console.log(genderData)
        this.genders = genderData.allGenders
      })

    this.employeeService.getMaritalStatus()
    this.maritalSub = this.employeeService.getAllMaritalStatusUpdateListener()
      .subscribe(maritalData => {
        console.log(maritalData)
        this.marital_statuses = maritalData.allMaritals
      })

    this.employeeService.getRelationships()
    this.relatnSub = this.employeeService.getAllRelationshipStatusUpdateListener()
      .subscribe(relatnData => {
        console.log(relatnData)
        this.relationship_types = relatnData.allRelationship
      })

    this.employeeService.getQualifications()
    this.qualificationSub = this.employeeService.getAllQualificationStatusUpdateListener()
      .subscribe(qualData => {
        console.log(qualData)
        this.qualification_types = qualData.allQualifications
      })

    this.employeeService.getBanks()
    this.bankSub = this.employeeService.getAllBankStatusUpdateListener()
      .subscribe(bankData => {
        console.log(bankData)
        this.bank_types = bankData.allBanks
      })
  }

  ngOnInit() {
    this.initContent();
  }



}
