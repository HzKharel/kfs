import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppLockServiceService {

    pageLocked = true;

    constructor(private router: Router) {
    }

    unlockPage(pin: string) {
        if (pin === '020996') {
            this.pageLocked = false;
            this.router.navigate(['/app']);


        }
        else {
            alert('Incorrect pin provided');
        }
    }
}
