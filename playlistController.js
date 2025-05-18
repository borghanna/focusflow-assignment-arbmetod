import { PlaylistModel } from '../models/playlistModel.js';
import { PlaylistView } from '../views/playlistView.js';

export class PlaylistController {
	constructor(data) {
		this.model = new PlaylistModel();
		this.view = new PlaylistView('playlist-container');

		this.model.loadPlaylists(data);
		this.view.renderPlaylists(this.model.getAllPlaylists());
	}
}
