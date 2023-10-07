import YouTube from "react-youtube";

function YouTubeVideo({ url }) {
	function getYouTubeVideoId(url) {
		// Define a regular expression pattern to match YouTube URLs
		var pattern =
			/(?:\?v=|\/embed\/|\/v\/|\/youtu\.be\/|\/watch\?v=|&v=|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/;

		// Use the pattern to extract the video ID
		var match = url.match(pattern);

		// If a match is found, return the video ID; otherwise, return null
		if (match && match[1]) {
			return match[1];
		} else {
			return null;
		}
	}
	const opts = {
		height: "300px",
		width: "80%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
		},
	};

	return (
		<div className="my-auto">
			<YouTube videoId={getYouTubeVideoId(url)} opts={opts} />
		</div>
	);
}

export default YouTubeVideo;
