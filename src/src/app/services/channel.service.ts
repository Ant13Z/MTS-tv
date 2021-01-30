import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChannelListModel } from 'src/app/models/channel-list.model';

@Injectable({
  providedIn: 'root'
})

export class ChannelService {

    private endPoint = '/assets/channels.json';

    constructor(private http: HttpClient) {}

    getChannels() {
        return this.http.get<ChannelListModel>(this.endPoint);
    }
}
