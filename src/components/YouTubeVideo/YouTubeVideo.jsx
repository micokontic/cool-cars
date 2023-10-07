import YouTube from "react-youtube";

function YouTubeVideo() {
	const opts = {
		height: "100%",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
		},
	};

	return <YouTube videoId="ec0WEDuSstY" opts={opts} />;
}

export default YouTubeVideo;
