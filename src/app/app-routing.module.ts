import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { HomeFourComponent } from './components/home-four/home-four.component';
import { HomeFiveComponent } from './components/home-five/home-five.component';
import { HomeSixComponent } from './components/home-six/home-six.component';
import {PageLockComponent} from './components/page-lock/page-lock.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
    {path: 'app', component: HomeFiveComponent, canActivate: [AuthGuard]},
    {path: '', component: PageLockComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
