import { Button, Card, Image } from "semantic-ui-react";
import "./SongCard.css";
import { Link } from "react-router-dom";

export default function SongCard({ song }) {
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
                <a href="/lyrics/${song.id}">View Song</a>
                <Link to={`/lyrics/${song.id}`}>View Song</Link>
              </Button>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
