import { Button, Card, Image } from "semantic-ui-react";

export default function SongCard({ song }) {
  return (
    <div className="d-flex flex-row">
      <Card.Group>
        <Card>
          <Card.Content>
            <Image size="medium" rounded src={song.image} />
            <br />
            <Card.Header>{song.title}</Card.Header>
            <Card.Meta>{song.artist}</Card.Meta>
            <Card.Description>
              <Button basic color="green">
                <a href="/lyrics/${song.id}">View Song</a>
              </Button>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
