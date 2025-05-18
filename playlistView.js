export class PlaylistView {
	constructor(containerId) {
		this.container = document.getElementById(containerId);
	}

	renderPlaylists(playlists) {
		this.container.innerHTML = '';

		playlists.forEach((pl) => {
			const div = document.createElement('div');
			div.className = 'playlist';

			const trackListHtml = pl.tracks
				.map((track) => {
					return `<li>${track.title} – ${track.artist}</li>`;
				})
				.join('');

			div.innerHTML = `
        <h3>${pl.name}</h3>
        <p><strong>Genre:</strong> ${pl.genre}</p>
        <p><strong>Tracks:</strong></p>
        <ul>
          ${trackListHtml}
        </ul>
      `;

			this.container.appendChild(div);
		});
	}
}
