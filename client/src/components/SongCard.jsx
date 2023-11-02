import { Button, Card, Image } from "semantic-ui-react";
// import { getSongLyrics } from "../../../server/utils/song";

export default function SongCard() {
  return (
    <Card.Group>
      <Card >
        <Card.Content>
          <Image size="mini" src="#" /><br />
          <Card.Header>Song</Card.Header>
          <Card.Meta>by Someone </Card.Meta>
          <Card.Description>
            <a href="/lyrics/:id">View Lyrics</a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              GO-TO Song
            </Button>
            <Button basic color="pink">
              WANT-TO sing
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}

// {songData.artist}
// {songData.title}
// {songData.image}
