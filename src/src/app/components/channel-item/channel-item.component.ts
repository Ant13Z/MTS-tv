import { Component, OnInit, Input } from '@angular/core';
import { ChannelModel } from 'src/app/models/channel.model';

@Component({
    selector: 'channel-item',
    templateUrl: './channel-item.component.html',
    styleUrls: ['./channel-item.component.scss'],
})

export class ChannelItemComponent implements OnInit {

    @Input('channel') channel!: ChannelModel;

    constructor() {
    }

    ngOnInit(): void {}

    public showDescription($event: MouseEvent) {
        const target = $event.target as HTMLDivElement;
        const description = Array.from(target.children)[0] as HTMLDivElement;
        description.style.top = $event.offsetY + 'px';
        description.style.left = $event.offsetX + 'px';
        target.classList.add('channel--visible-description');
        $event.stopPropagation();
    }

    public hideDescriptions() {
        document.querySelectorAll('.channel--visible-description')
            .forEach(e => e.classList.remove('channel--visible-description'));
    }

}
