import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { PrincipalComponent } from './principal/principal.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';
import { UserService } from './user.service';
import { DataService } from './data.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AsideComponent,
		PrincipalComponent,
		GraphComponent,
		TableComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		PaginationModule.forRoot()
	],
	providers: [
		UserService,
		DataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
