export class PlaylistModel {
	constructor() {
		this.playlist = [];
	}

	loadPlaylists(data) {
		this.playlists = data;
	}

	addPlaylist(playlist) {
		this.playlists.push(playlist);
	}

	getAllPlaylists() {
		return this.playlists;
	}
}
