import { Icon, Form, Grid } from "semantic-ui-react";
import SongCard from "../components/SongCard";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_SONGS } from "../utils/queries";
import { useEffect } from "react";

const Home = () => {
  const [formState, setFormState] = useState({
    song: "",
  });
  const [searchSong, { data, loading }] = useLazyQuery(SEARCH_SONGS);
  let songs = data?.songs || [];
  console.log(songs);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      //trigger fetch request here
      const { data } = searchSong({
        variables: { ...formState },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  
  useEffect(() => {
    searchSong({ variables: { song: "random" } });
  }, []);

  return (
    <div>
      <div className="formContainer">
      <h2>Let's Sing!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Input
            className="formInput"
            inverted
            onChange={handleChange}
            name="song"
            value={formState.song}
            placeholder="Search for a song or artist..."
          />
        </Form>
      </div>
      <Grid stackable columns={3} divided>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Grid.Row>
            {songs.map((song, i) => (
              <Grid.Column key={i}>
                <SongCard song={song} />
              </Grid.Column>
            ))}
          </Grid.Row>
        )}
      </Grid>
    </div>
  );
};

export default Home;
