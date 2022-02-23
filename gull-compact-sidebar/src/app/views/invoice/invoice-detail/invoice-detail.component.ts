import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Utils } from 'src/app/shared/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-invoice-detail',
    templateUrl: './invoice-detail.component.html',
    styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
    viewMode: 'edit' | 'print' = 'edit';
    id: string;
    isNew: boolean;
    invoice: any = {};
    invoiceForm: FormGroup;
    invoiceFormSub: Subscription;
    subTotal: number;
    saving: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private dl: DataLayerService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isNew = !this.id;
        this.buildInvoiceForm(this.invoice);
        if (this.id) {
            this.viewMode = 'print';
            this.dl.getInvoice(this.id)
                .subscribe(res => {
                    this.invoice = res;
                    this.buildInvoiceForm(this.invoice);
                    this.subTotal = this.calculateSubtotal(this.invoiceForm.value);
                })
        }
    }

    buildInvoiceForm(i: any = {}) {
        this.invoiceForm = this.fb.group({
            id: [i.id],
            orderNumber: [i.orderNumber],
            orderStatus: [i.orderStatus],
            currency: [i.currency],
            vat: [i.vat],
            orderDate: [i.orderDate ? Utils.dateToNgbDate(i.orderDate) : {}],
            billFrom: this.fb.group({
                name: [i.billFrom ? i.billFrom.name : ''],
                address: [i.billFrom ? i.billFrom.address : '']
            }),
            billTo: this.fb.group({
                name: [i.billTo ? i.billTo.name : ''],
                address: [i.billTo ? i.billTo.address : '']
            }),
            items: this.fb.array((() => {
                if (!i.items) {
                    return [];
                }
                return i.items.map((item) => this.createItem(item));
            })())
        });
        // LINSTEN FOR VALUE CHANGES AND CALCULATE TOTAL
        if (this.invoiceFormSub) {
            this.invoiceFormSub.unsubscribe();
        }
        this.invoiceFormSub = this.invoiceForm.valueChanges
            .subscribe(formValue => {
                this.subTotal = this.calculateSubtotal(formValue);
            });
    }

    createItem(item: any = {}) {
        return this.fb.group({
            name: [item.name],
            unit: [item.unit],
            unitPrice: [item.unitPrice]
        });
    }
    addItem() {
        const control = <FormArray>this.invoiceForm.controls['items'];
        control.push(this.createItem());
    }
    removeItem(i) {
        const control = <FormArray>this.invoiceForm.controls['items'];
        control.removeAt(i);
    }

    saveInvoice() {
        this.saving = true;
        this.invoice = this.invoiceForm.value;
        this.invoice.orderDate = Utils.ngbDateToDate(this.invoiceForm.value.orderDate);
        this.dl.saveInvoice(this.invoiceForm.value)
            .subscribe((savedInvoice: any) => {
                this.viewMode = 'print';
                this.saving = false;
                this.toastr.success('Invoice Saved!', 'Success!', { timeOut: 3000 });
                if(this.isNew) {
                    this.router.navigateByUrl('/invoice/edit/'+savedInvoice.id);
                }
            });
    }



    calculateSubtotal(invoice) {
        let total = 0;
        invoice.items.forEach(i => {
            total += (i.unit * i.unitPrice);
        });
        return total;
    }

    print() {
        if (window) {
            window.print();
        }
    }

}
