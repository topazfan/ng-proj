import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


const materials = [ 
  CommonModule, 
  NgbNavModule 
];


@NgModule({
  declarations: [],
  imports: materials,
  exports: materials
})
export class MaterialModule { }
