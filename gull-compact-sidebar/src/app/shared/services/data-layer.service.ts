import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from '../utils';

@Injectable({
    providedIn: 'root'
})
export class DataLayerService {

    constructor(
        private http: HttpClient
    ) { }


    getInvoices() {
        return this.http.get<any[]>('/api/invoices');
    }
    getInvoice(id) {
        return this.http.get<any[]>('/api/invoices/'+id);
    }
    saveInvoice(invoice) {
        if(invoice.id) {
            return this.http.put<any[]>('/api/invoices/'+invoice.id, invoice);
        } else {
            invoice.id = Utils.genId();
            return this.http.post<any[]>('/api/invoices/', invoice);
        }
    }
    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/invoices/'+id);
    }
    getMails() {
        return this.http.get<any[]>('/api/mails');
    }
    getCountries() {
        return this.http.get<any[]>('/api/countries');
    }
    getProducts() {
        return this.http.get<any[]>('api/products');
    }
}
