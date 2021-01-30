import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChannelItemComponent } from './components/channel-item/channel-item.component';
import { TabSectionComponent } from './components/tab-section/tab-section.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { SortComponent } from './components/sort/sort.component';

import { ChannelService } from './services/channel.service';


@NgModule({
    declarations: [
        AppComponent,
        ChannelListComponent,
        ChannelItemComponent,
        TabSectionComponent,
        SortComponent,
        CustomDropdownComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        ChannelService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
