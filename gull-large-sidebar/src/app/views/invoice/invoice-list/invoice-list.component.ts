import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
    invoices: any[]

    constructor(
        private dl: DataLayerService,
        private modalService: NgbModal,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        this.loadInvoices()
    }
    loadInvoices() {
        this.dl.getInvoices()
            .subscribe(res => {
                this.invoices = res;
            })
    }

    deleteInvoice(id, modal) {
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then((result) => {
                this.dl.deleteInvoice(id)
                    .subscribe(res => {
                        this.toastr.success('Invoice Deleted!', 'Success!', { timeOut: 3000 });
                        this.loadInvoices();
                    })
            }, (reason) => {
            });
    }

}
