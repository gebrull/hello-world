import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestRightComponent } from './test-right/test-right.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentPipeComponent } from './component-pipe/component-pipe.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  // O array declarations, contém todos os components que serão usados na aplicação
  declarations: [
    AppComponent,
    TestComponent,
    TestRightComponent,
    DiretivasEstruturaisComponent,
    ComponentInteractionComponent,
    ComponentPipeComponent,
    ListEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // O service precisa ser declarado aqui no providers
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
