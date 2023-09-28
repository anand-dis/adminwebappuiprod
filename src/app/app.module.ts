import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule } from '@angular/material/menu';
import {MatIconModule } from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';
import {MatListModule } from '@angular/material/list';
import { HomeComponent } from './Master/Admin/home/home.component';
import { HeaderComponent } from './Master/Admin/header/header.component';
import { SidenavComponent } from './Master/Admin/sidenav/sidenav.component';
import { ConfigurationComponent } from './Master/Admin/configuration/configuration.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalizationPanelComponent } from './Master/Admin/Panels/personalization-panel/personalization-panel.component';
import { AuthenticationprefPanelComponent } from './Master/Admin/Panels/authenticationpref-panel/authenticationpref-panel.component';
import { AuthorizationprefPanelComponent } from './Master/Admin/Panels/authorizationpref-panel/authorizationpref-panel.component';
import { KycverificationPanelComponent } from './Master/Admin/Panels/kycverification-panel/kycverification-panel.component';
import { UtilityservicesPanelComponent } from './Master/Admin/Panels/utilityservices-panel/utilityservices-panel.component';
import { SignupsettingsPanelComponent } from './Master/Admin/Panels/signupsettings-panel/signupsettings-panel.component';
import { OthersettingsPanelComponent } from './Master/Admin/Panels/othersettings-panel/othersettings-panel.component';
import { WorkflowsPanelComponent } from './Master/Admin/Panels/workflows-panel/workflows-panel.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    ConfigurationComponent,
    PersonalizationPanelComponent,
    AuthenticationprefPanelComponent,
    AuthorizationprefPanelComponent,
    KycverificationPanelComponent,
    UtilityservicesPanelComponent,
    SignupsettingsPanelComponent,
    OthersettingsPanelComponent,
    WorkflowsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
