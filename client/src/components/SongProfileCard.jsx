import { Button, Card, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { useMutation } from "@apollo/client";
import { REMOVE_SONG } from '../utils/mutation'
import { QUERY_ME } from '../utils/queries'

export default function SongProfileCard({ song, userId }) {
  const [removeSong] = useMutation(REMOVE_SONG, {
    refetchQueries: [
      QUERY_ME
    ]
  });

  const handleRemoveSong = async () => {
    console.log('userId', userId)
    console.log('song', song)
    const removedSong = await removeSong({ variables: { userId, songId: song.songId }})
  }
  
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
                <Link to={`/songs/${song.songId}`}>View Song</Link>
              </Button>
              <Button onClick={handleRemoveSong}>
                Remove Song
              </Button>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
