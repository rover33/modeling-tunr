import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ManagerNewComponent } from './manager-new/manager-new.component';
import { ManagerShowComponent } from './manager-show/manager-show.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
import { ManagerIndexComponent } from './manager-index/manager-index.component';
import { ManagersComponent } from './managers.component';
import { ManagersService } from './managers.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ManagersComponent, ManagerIndexComponent, ManagerNewComponent, ManagerShowComponent, ManagerEditComponent],
  providers: [ManagersService]
})
export class ManagersModule { }
