import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkitaSbComponent } from './akita-sb-container/akita-sb.component';

const routes: Routes = [{ path: 'akita-sb', component: AkitaSbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkitaSbRoutingModule {}
