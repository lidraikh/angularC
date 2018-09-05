import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent} from './SuccessAlert/successalert.component'
import { WarnignAlertComponent } from './warnign-alert/warnign-alert.component';
import { AlertsComponent } from './alerts/alerts.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarnignAlertComponent,
    AlertsComponent,
    SuccessAlertComponent,
    UserComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
