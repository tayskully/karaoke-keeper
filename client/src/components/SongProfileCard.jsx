import { Button, Card, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default function SongProfileCard({ song }) {
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
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
