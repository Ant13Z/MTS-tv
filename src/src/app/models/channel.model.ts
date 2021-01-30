import { GenreModel } from './genre.model';
import { PictureModel } from './picture.model';

export interface ChannelModel {
    name: string;
    introduce: string;
    picture: PictureModel;
    genres: GenreModel[];
}
