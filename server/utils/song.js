module.exports = {
  getSongs: async (song) => {
    const Genius = require("genius-lyrics");
    const Client = new Genius.Client(
      "oF_IZuPFe7vq4ap8urx7ACfdzJTkJ3NfL9312cubJTHMHS-OayePj_TbHXq-5jsx"
    );
    // const init = async () => {
    const searches = await Client.songs.search(song);

    // for (const songData of searches) {
    //   console.log(songData.title, songData.artist.name);}

    // searches.forEach((songData) => {
    //   console.log(songData.title);
    //   return songData.title;
    // });

    const songSearch = searches.map((songData) => {
      console.log({
        title: songData.title,
        artist: songData.artist.name,
      });
      return { title: songData.title, artist: songData.artist.name };
    });

    // Pick first one
    // console.log(searches);
    const firstSong = searches[0];
    const secondSong = searches[1];
    const multipleSongs = searches[(0, 1, 2, 3, 4)];
    // console.log("About the Song:\n", firstSong.artist.name, "\n");
    // console.log("About the Song:\n", secondSong.artist.name, "\n");
    // console.log("About the Song:\n", multipleSongs, "\n");

    // Ok lets get the lyrics
    // const lyrics = await songData.lyrics();
    // const title = songData.title;
    // const image = songData.image;
    // const artist = songData.artist.name;

    // console.log(
    //   "\n",
    //   firstSong.title,
    //   "\n",
    //   firstSong.image,
    //   "\n",
    //   firstSong.artist.name,
    //   "\n",
    //   lyrics
    // );
    console.log(songSearch);

    //returns the array of songs from search term
    return songSearch;
    // };

    // init();
  },
};
