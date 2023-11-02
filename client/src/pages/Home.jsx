import { Icon, Form, Grid } from "semantic-ui-react";
import SongCard from "../components/SongCard";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_SONGS } from "../utils/queries";

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

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Input
          className="formInput"
          inverted
          onChange={handleChange}
          name="song"
          value={formState.song}
          placeholder="Search for a song..."
        />
      </Form>

      <Grid columns={4} divided>
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
