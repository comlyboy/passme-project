import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationsService } from 'src/app/shared/notifications.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  key = localStorage.getItem('key');
  API_URL = environment.API_URL

  loans: any[] = []

  constructor(
    private http: HttpClient,
    private router: Router,
    public notificationsService: NotificationsService
  ) { }



  // +++++++++++++++++++++++++
  // loan
  private allLoanUpdated = new Subject<{
    allLoan: any[];
  }>();

  getAllLoanUpdateListener() {
    return this.allLoanUpdated.asObservable();
  }

  addLoan(
    loanType: string,
    startDate: any,
    endDate: any,
    amount: any,
    employee: any
  ) {
    const loanData = {
      loan_type: loanType,
      start_date: startDate,
      end_date: endDate,
      loan_amount: amount,
      employee: employee
    };
    this.http.post(`${this.API_URL}payroll/${this.key}/loans/`, loanData)
      .subscribe(response => {
        this.notificationsService.success(`successfully added!!`)
        this.getLoan()
      }, error => {
        console.log(error)
      });
  }

  getLoan() {
    this.http.get<any>(
      `${this.API_URL}payroll/${this.key}/loans/`
    )
      .subscribe(loanData => {
        console.log(loanData)
        this.loans = loanData
        this.allLoanUpdated.next({
          allLoan: [...this.loans]
        });
      }, error => {
        console.log(error)
      });
  }

  getLoanDetails(id: string) {
    return this.http.get<any>(`${this.API_URL}payroll/${this.key}/loans/${id}`);
  }

  deleteLoan(id: number) {
    return this.http.delete(`${this.API_URL}payroll/${this.key}/loans/${id}`);
  }


}
