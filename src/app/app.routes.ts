import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'Item',
        component : ItemComponent
    },
    {
        path : 'Item-List',
        component : ItemListComponent
    },
    {
        path : 'Data-Binding',
        component : DataBindingComponent
    },
    {
        path : 'Structural',
        component : StructuralDirectivesComponent
    },
    {
        path : 'Attribute',
        component : AttributeDirectiveComponent
    },
    {
        path : 'Student',
        component : StudentComponent
    },
    {
        path : 'Teacher',
        component : TeachersComponent
    }
];
