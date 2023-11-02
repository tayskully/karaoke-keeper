import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import React from "react";

import Auth from "../utils/auth";

// import { QUERY_SINGLE_SONG } from "../utils/queries";

const SingleSong = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { songId } = useParams();

  //   const { loading, data } = useQuery(QUERY_SINGLE_SONG, {
  // pass URL parameter
  //     variables: { songId: songId },
  //   });

  //   const song = data?.song || {};

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header> </Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            GO-TO Song
          </Button>
          <Button basic color="pink">
            WANT-TO Sing
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default SingleSong;
