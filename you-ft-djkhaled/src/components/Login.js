import { Container } from "react-bootstrap";
const AUTH_URL =
	"https://accounts.spotify.com/authorize?client_id=5a55cf15e70f4f6b9e20972e1c37b58c&response_type=code&redirect_uri=https://u-ft-djkhaled.netlify.app&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state";
export default function Login() {
	return (
		<Container>
			<a className="btn btn-success btn-lg" href={AUTH_URL}>
				Login with spotify
			</a>
		</Container>
	);
}
