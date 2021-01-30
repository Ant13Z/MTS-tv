import { Component } from '@angular/core';

import { TabModel } from 'src/app/models/tab.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

    public activeTab!: TabModel;

    title = 'src1';

    public changeTab(tab: TabModel) {
        this.activeTab = tab;
        // console.log(this.activeTab);
    }
}
