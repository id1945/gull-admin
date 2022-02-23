import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-grid',
  templateUrl: './contact-grid.component.html',
  styleUrls: ['./contact-grid.component.scss']
})
export class ContactGridComponent implements OnInit {
  page = 1;
  
  contacts: any[] = [];

  constructor(public contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe((res: any[]) => {
      this.contacts = res;
    });
  }
}
