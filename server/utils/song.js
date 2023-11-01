module.exports = {
  getSongLyrics: async (song) => {
    const Genius = require("genius-lyrics");
    const Client = new Genius.Client(
      "oF_IZuPFe7vq4ap8urx7ACfdzJTkJ3NfL9312cubJTHMHS-OayePj_TbHXq-5jsx"
    );

    const init = async () => {
      const searches = await Client.songs.search(song);

      // Pick first one
      const firstSong = searches[0];
      console.log("About the Song:\n", firstSong, "\n");

      // Ok lets get the lyrics
      const lyrics = await firstSong.lyrics();
      console.log("Lyrics of the Song:\n", lyrics, "\n");
    };

    init();
  },
};
