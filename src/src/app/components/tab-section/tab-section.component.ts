import {Component, Output, EventEmitter, OnInit} from '@angular/core';

import {TabModel} from 'src/app/models/tab.model';

@Component({
  selector: 'tab-section',
  templateUrl: './tab-section.component.html',
  styleUrls: ['./tab-section.component.scss']
})
export class TabSectionComponent implements OnInit {

    @Output() onChangeTab: EventEmitter<TabModel> = new EventEmitter<TabModel>();

    public activeTab: TabModel = TabModel.tvs;

    public tabModel: any;

    constructor() {
        this.tabModel = TabModel;
    }

    ngOnInit(): void {}

    public changeTab(tab: TabModel) {
        this.activeTab = tab;
        this.onChangeTab.emit(this.activeTab);
    }

}
