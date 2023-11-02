import { Icon, Form } from "semantic-ui-react";
import SongCard from "../components/SongCard";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_SONGS } from "../utils/queries";

const Home = () => {
  const [formState, setFormState] = useState({
    song: "",
  });
  const [searchSong, { error }] = useLazyQuery(SEARCH_SONGS);
  const songs = data?.songs || [];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      //trigger fetch request here
      const { data } = searchSong({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { song, value } = event.target;
    setFormState({ ...formState, [song]: value });
  };

  return (
    <main>
      <Form.Input
        inverted
        icon={<Icon search icon />}
        onSubmit={handleFormSubmit}
        onChange={handleChange}
        name="search"
        // value={formState.song}
        placeholder="Search for a song..."
      />
      <div className="container">
        <SongCard 
        song = {{
          title: "thriller",
          artist: "michael jackson",
          lyrics: "blah blah",
          category: "want to sing"
        }} />
        <SongCard 
        song = {{
          title: "someone like you",
          artist: "adele",
          lyrics: "blah blah",
          category: "go-to song"
        }} />
      </div>

      {loading ? <div>Loading...</div> : <songCard />}
    </main>
  );
};
export default Home;

//pass the props to the component here^ to render component on page
{
  /* <div>
{songData.map((song) => (<div>
  <SongCard song={song} key={song.artist} />
  </div>
))}
</div> */
}
