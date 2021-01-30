import { Component, OnInit} from '@angular/core';

import { ChannelService } from 'src/app/services/channel.service';
import { ChannelListModel } from 'src/app/models/channel-list.model';
import { ChannelModel } from 'src/app/models/channel.model';

@Component({
    selector: 'channel-list',
    templateUrl: './channel-list.component.html',
    styleUrls: ['./channel-list.component.scss'],
})
export class ChannelListComponent implements OnInit {

    public channelCount: number = 0;
    public channelList: ChannelModel[] = [];
    public shift: number = 24;

    constructor(private channelService: ChannelService) {

    }

    ngOnInit(): void {
        this.channelService.getChannels()
            .subscribe((data: ChannelListModel) => {
                this.channelCount = data.total;
                this.channelList = data.channelDetails.slice(0, this.shift);
            });
    }

    public getMore(): void {
        this.channelService.getChannels()
            .subscribe((data: ChannelListModel) => {
                this.channelList.push(...data.channelDetails.slice(this.shift, this.shift + 12));
                this.shift += 12;
            });
    }
}
