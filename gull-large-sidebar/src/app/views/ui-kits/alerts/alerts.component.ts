import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alerts;
  alertCards;
  mainAlert = true;
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.alerts = [...ALERTS];
    this.alertCards = [...ALERTS];
  }

  closeAlert(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  closeAlertCard(alert: Alert) {
    this.alertCards.splice(this.alertCards.indexOf(alert), 1);
  }

  success() {
    this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 300000 });
  }
  warning() {
    this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000 });
  }
  info() {
    this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000 });
  }
  error() {
    this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000 });
  }

  successBar() {
    this.toastr.success('Toastr success!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
  }
  warningBar() {
    this.toastr.warning('Toastr warning!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
  }
  infoBar() {
    this.toastr.info('Toastr info!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
  }
  errorBar() {
    this.toastr.error('Toastr error!', 'Toastr title', { timeOut: 3000, closeButton: true, progressBar: true });
  }

}
