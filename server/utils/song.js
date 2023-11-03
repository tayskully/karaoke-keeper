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
      // console.log({
      // title: songData.title,
      // artist: songData.artist.name,
      // image: songData.image,
      // songId: songData.id,
      // });
      return {
        title: songData.title,
        artist: songData.artist.name,
        image: songData.image,
        songId: songData.id,
      };
    });

    // Pick first one

    // const firstSong = searches[0];
    // const secondSong = searches[1];
    // const multipleSongs = searches[(0, 1, 2, 3, 4)];
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
    // console.log(songSearch);

    //returns the array of songs from search term
    return songSearch;
    // };

    // init();
  },

  getSongById: async (songId) => {
    // const init = async () => {
    const song = await Client.songs.get(songId);
    console.log("About the Song:\n", song, "\n");
    // Ok lets get the lyrics
    const lyrics = await song.lyrics();
    console.log("Lyrics of the Song:\n", lyrics, "\n");
    return {
      songId: song.id,
      title: song.title,
      lyrics,
    };
    console.log(song);
    console.log(lyrics);
    // const searches = await Client.songs.search(song);

    // const songSearch = searches.map((songData) => {
    //   console.log({
    //     title: songData.title,
    //     artist: songData.artist.name,
    //     image: songData.image,
    //   });
    //   return {
    //     title: songData.title,
    //     artist: songData.artist.name,
    //     image: songData.image,
    //     songId: songData.id,
    //   };
    // });
  },
  getRandomSongs: async () => {
    const randomStrings = [
      "I",
      "and",
      "to",
      "party",
      "the",
      "be",
      "to",
      "of",
      "and",
      "a",
      "in",
      "that",
      "have",
      "I",
      "it",
      "for",
      "not",
      "on",
      "with",
      "he",
      "as",
      "you",
      "do",
      "at",
      "this",
      "but",
      "his",
      "by",
      "from",
      "they",
      "we",
      "say",
      "her",
      "she",
      "or",
      "an",
      "will",
      "my",
      "one",
      "all",
      "would",
      "there",
      "their",
      "what",
      "so",
      "up",
      "out",
      "if",
      "about",
      "who",
      "get",
      "which",
      "go",
      "me",
      "when",
      "make",
      "can",
      "like",
      "time",
      "no",
      "just",
      "him",
      "know",
      "take",
      "people",
      "into",
      "year",
      "your",
      "good",
      "some",
      "could",
      "them",
      "see",
      "other",
      "than",
      "then",
      "now",
      "look",
      "only",
      "come",
      "its",
      "over",
      "think",
      "also",
      "back",
      "after",
      "use",
      "two",
      "how",
      "our",
      "work",
      "first",
      "well",
      "way",
      "even",
      "new",
      "want",
      "because",
      "any",
      "these",
      "give",
      "day",
      "most",
      "us",
    ];
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
