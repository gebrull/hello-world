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
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

// Como exportamos os components que usaremos para o routing lá no app-routing.module.ts, podemos importar eles aqui:

import { routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailDepartmentComponent } from './detail-department/detail-department.component';

@NgModule({
  // O array declarations, contém todos os components que serão usados na aplicação
  declarations: [
    AppComponent,
    TestComponent,
    TestRightComponent,
    DiretivasEstruturaisComponent,
    ComponentInteractionComponent,
    ComponentPipeComponent,
    DetailEmployeeComponent,
    // Precisamos colocar ele aqui tambem
    routingComponents,
    PageNotFoundComponent,
    DetailDepartmentComponent
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
