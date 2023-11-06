import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import "./SongCard.css";

import { useLazyQuery, useMutation } from "@apollo/client";
import { ADD_SONG } from "../utils/mutation";
import { GET_SINGLE_SONG } from "../utils/queries";
import Auth from "../utils/auth";

export default function SongCard({ song }) {
  const [getSong] = useLazyQuery(GET_SINGLE_SONG);
  const [addSong] = useMutation(ADD_SONG);

  const handleAddSong = async () => {
    try {
      // get lyrics
      const songResult = await getSong({ variables: { songId: song.songId } });

      const lyrics = songResult.data.song.lyrics;

      const { data } = await addSong({
        variables: {
          songId: parseInt(song.songId),
          title: song.title,
          artist: song.artist,
          image: song.image,
          lyrics,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="d-flex flex-row">
      <Card.Group>
        <Card>
          <Card.Content>
            <Image size="medium" rounded src={song.image} />
            <br />
            <Card.Header style={{ color: "white" }}>{song.title}</Card.Header>
            <Card.Meta style={{ color: "white" }}>{song.artist}</Card.Meta>
            <Card.Description>
              <Button basic color="green">
                {/* <a href="/songs/{song.id}">View Song</a> */}
                <Link to={`/songs/${song.songId}`}> view song</Link>
              </Button>
              {Auth.loggedIn() && (
                <Button onClick={handleAddSong}>add to profile</Button>
              )}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
