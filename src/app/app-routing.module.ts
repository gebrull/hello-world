import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailDepartmentComponent } from './detail-department/detail-department.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [

  // Aqui, usamos o redirectTo para redirecionar diretamente da página principal para o "/departments".
  // Usamos o pathMatch para definir que vamos escolher quando redirecionar, e o 'full' é a estratégia
  // que ele vai adotar para escoluqer quando ele redirecionará: quando a url for igual ao path
  { path: '', redirectTo: '/departments', pathMatch: 'full'},

  // Aqui vamos adicionar uma rota com argumentos, que no caso, é o id
  //{ path: 'departments/:id', component: DetailDepartmentComponent},

  /**Essa é uma forma de usar o child routes no { path: 'departments/:id', component: DetailDepartmentComponent}
   * Vamos supor que queremos implementar uma "visão geral" e um "contact" na tela de detalhar
   * um departamento, esses dois elementos devem ser carregados quando o usuário apertar um botão
   * só então eles poderão ser carregados.
   * Para declarar essa rota, precisamos usar esses três argumentos:
   * path - usado normalmente
   * component - usado normalmente
   * children - vai listar os components que serão filhos dessa rota. Aqui, children receberá uma lista com as
   * rotas que serão filhas. A declaração dessas rotas filhas segue o mesmo padrão da declaração das rotas normais.
   */
  {
     path: 'departments/:id',
     component: DetailDepartmentComponent,
     children: [
       { path: 'overview', component: DepartmentOverviewComponent},
       { path: 'contact', component: DepartmentContactComponent}
     ]
  },


  // Com essas rotas, temos os caminhos "localhost:4200/departments" e "localhost:4200/employees" respectivamente
  { path: 'departments', component: ListDepartmentComponent},
  { path: 'employees', component: ListEmployeeComponent},


  // Essa rota funciona para as qualquer página, por isso temos que sempre colocar ela no final desse array de
  // routes, pq se uma rota especificada não entrar em nenhuma das especificadas acima, então ela vai ser uma
  // página que não existe
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Para evitar o import do ListEmployee e ListDepartment aqui e no app.module.ts, podemos
// exportar o que a gente importa aqui para os outros lugares, para isso vamos criar um array
// com todos os components que queremos exportar. Isso é uma boa prática de programação.
export const routingComponents = [ListDepartmentComponent, 
                                  ListEmployeeComponent, 
                                  PageNotFoundComponent, 
                                  DetailDepartmentComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent];
