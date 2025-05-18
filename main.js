import { PlaylistController } from './controllers/playlistController.js';
import data from './data/playlists.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
	new PlaylistController(data);
});
