import SpotifyPlayer from "react-spotify-web-playback";

export default function ({ accessToken }) {
	return (
		<div>
			<SpotifyPlayer
				token={accessToken}
				uris={["spotify:track:12PNcnMsjsZ3eHm62t8hiy"]}
				name="U ft DJ KHALED"
				autoPlay={true}
			/>
		</div>
	);
}
