import {Component, OnInit} from '@angular/core';

interface CalculatorInterface {
    price: string;
    interestRate: string;
    term: string;
    salary: string;
    downPayment: string;
}

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
    details: CalculatorInterface = {downPayment: null, interestRate: null, price: null, salary: null, term: null};
    repayment = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    calculateMortgage() {
        const x = Math.pow(1 + parseFloat(this.details.interestRate) / 100 / 12, parseInt(this.details.term) * 12);
        const monthly: number = ((parseInt(this.details.price) - parseInt(this.details.downPayment)) * x * parseFloat(this.details.interestRate)  / 100 / 12) / (x - 1);
        if (isFinite(monthly)) {
            this.repayment = monthly.toFixed(2);
            // total.innerHTML = (monthly * payments).toFixed(2);
            // totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
        }
    }

}
