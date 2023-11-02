const Genius = require("genius-lyrics");
const Client = new Genius.Client(
  "oF_IZuPFe7vq4ap8urx7ACfdzJTkJ3NfL9312cubJTHMHS-OayePj_TbHXq-5jsx"
);

module.exports = {
  getSongs: async (song) => {
    // const init = async () => {
    const searches = await Client.songs.search(song);
    console.log(searches);

    const songSearch = searches.map((songData) => {
      console.log({
        title: songData.title,
        artist: songData.artist.name,
        image: songData.image,
      });
      return {
        title: songData.title,
        artist: songData.artist.name,
        image: songData.image,
      };
    });

    // Pick first one

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

  getRandomSongs: async () => {
    const randomStrings = ["I", "and", "to", "party"];
    const randomString =
      randomStrings[Math.floor(Math.random() * randomStrings.length)];

    const searches = await Client.songs.search(randomString);

    const songSearch = searches.map((songData) => {
      return {
        title: songData.title,
        artist: songData.artist.name,
        image: songData.image,
      };
    });

    return songSearch;
  },
};
