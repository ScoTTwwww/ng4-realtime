import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmitRoutingModule } from './emit-routing.module';
import { EmitComponent } from './emit.component';

@NgModule({
  imports: [
    CommonModule,
    EmitRoutingModule
  ],
  declarations: [EmitComponent]
})
export class EmitModule { }
