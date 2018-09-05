import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color:white;
        }
    `]
})
export class ServerComponent {
    serverId: 10;
    severStatus: 'offline';

    constructor() {
        this.severStatus = Math.random() > 0.5 ? "online" : "offline";
    }
    getServerStatus() {
        return this.severStatus;
    }

    getColor() {
        return this.severStatus === "online" ? 'green' : 'red';
    }
}
