import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../shared/notifications.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  constructor(
    public notificationsService: NotificationsService
  ) { }

  ngOnInit() {
  }

}
