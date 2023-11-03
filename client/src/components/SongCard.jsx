import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import "./SongCard.css";

export default function SongCard({ song }) {
  // console.log(song);
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
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
