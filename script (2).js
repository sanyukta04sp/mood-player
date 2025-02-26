
function playMusic(mood) {
    const youtubeLinks = {
        happy: "https://www.youtube.com/results?search_query=happy+songs+playlist",
        sad: "https://www.youtube.com/results?search_query=sad+songs+playlist",
        relaxed: "https://www.youtube.com/results?search_query=relaxing+music",
        focused: "https://www.youtube.com/results?search_query=focus+music+study",
        energetic: "https://www.youtube.com/results?search_query=workout+music"
    };

    const spotifyLinks = {
        happy: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0",
        sad: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1",
        relaxed: "https://open.spotify.com/playlist/37i9dQZF1DWVLoqOzk8BWj",
        focused: "https://open.spotify.com/playlist/37i9dQZF1DX8wtrGDH81Oa",
        energetic: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"
    };

    // Open YouTube or Spotify link in a new tab
    window.open(youtubeLinks[mood], "_blank");
    window.open(spotifyLinks[mood], "_blank");
}