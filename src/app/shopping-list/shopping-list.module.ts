import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from '../shopping-edit/shopping-edit.component';
// import { ShoppingListService } from './shopping-list.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';


const shoppingListRoutes: Routes = [
    { path: '', component: ShoppingListComponent },
]

@NgModule ({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],

    imports: [
        FormsModule,
        [RouterModule.forChild(shoppingListRoutes)],
        SharedModule
    ],

    exports: [

    ],

    providers: [
        // ShoppingListService,
        LoggingService
    ],

})
export class ShoppingListModule {

}