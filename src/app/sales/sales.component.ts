import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sale } from './sale';
import { SaleService } from './sale.service';

@Component({
    selector: 'my-sales',
    templateUrl: './sales.component.html'
})

export class SalesComponent implements OnInit {
    sales: Sale[];
    constructor(
        private saleService: SaleService,
        private router: Router) { }

    getSales(): void {
        this.saleService
            .getSales()
            .then(sales => {
                this.sales = sales;
                console.log('sales ', this.sales);
            });

    }
    ngOnInit(): void {
        this.getSales();
    }
}