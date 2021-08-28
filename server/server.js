const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
	const code = req.body.code;
	// console.log(code, "<<<<< CODE");
	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://localhost:3000",
		clientId: "5a55cf15e70f4f6b9e20972e1c37b58c",
		clientSecret: "018a6d959e724e61af93853217dd455b",
	});

	spotifyApi
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			});
		})
		.catch(() => {
			res.sendStatus(400);
		});
});

app.post("/refresh", (req, res) => {
	const refreshToken = req.body.refreshToken;
	const spotifyApi = new SpotifyWebApi({
		redirectUri: "http://localhost:3000",
		clientId: "5a55cf15e70f4f6b9e20972e1c37b58c",
		clientSecret: "018a6d959e724e61af93853217dd455b",
		refreshToken: "",
	});
	spotifyApi
		.refreshAccessToken()
		.then((data) => {
			res.json({
				accessToken: data.body.accessToken,
				expiresIn: data.body.expiresIn,
			});
			// set new access token
			spotifyApi.setAccessToken(data.body["access_token"]);
		})
		.catch(() => {
			res.sendStatus(400);
		});
});

// app.listen(8080);
