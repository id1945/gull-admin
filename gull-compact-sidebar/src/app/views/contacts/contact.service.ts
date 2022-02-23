import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements OnInit {
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    return this.http.get('api/users');
  }
}
