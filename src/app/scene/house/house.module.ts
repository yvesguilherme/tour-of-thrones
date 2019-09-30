import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HouseComponent } from './house.component';
import { ModalComponent } from 'src/app/component/modal/modal.component';
import { LoaderComponent } from 'src/app/component/loader/loader.component';

const routes: Routes = [
    {
        path: '',
        component: HouseComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
    declarations: [HouseComponent, ModalComponent, LoaderComponent],
    exports: [HouseComponent, RouterModule],
})
export class HouseModule { }
