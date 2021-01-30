import { ChannelModel } from './channel.model';

export interface ChannelListModel {
    total: number;
    channelDetails: ChannelModel[];
}
