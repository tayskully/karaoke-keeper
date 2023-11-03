import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import React from "react";
// import { useEffect } from "react";

import Auth from "../utils/auth";

import { GET_SINGLE_SONG } from "../utils/queries";

const Lyrics = () => {
  //   Use `useParams()` to retrieve value of the route parameter `:songId`
  const { songId } = useParams();
  // console.log(songId);
  // parseInt because it takes Int 
  const { loading, data } = useQuery(GET_SINGLE_SONG, {variables: { songId: parseInt(songId) }});

  let song = data?.song || {};


  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div>
      <p> Title:{song.title}</p>
      <p> title goes here</p>
      <hr />
      <p> Lyrics:{song.lyrics}</p>
      <p> lyrics goes here</p>
    </div>

    //     <Card>
    //       <Image
    //         src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
    //         wrapped
    //         ui={false}
    //       />
    //       <Card.Content>
    //         <Card.Header> </Card.Header>
    //         <Card.Meta>
    //           <span className="date">Joined in 2015</span>
    //         </Card.Meta>
    //         <Card.Description>
    //           Matthew is a musician living in Nashville.
    //         </Card.Description>
    //       </Card.Content>
    //       <Card.Content extra>
    //         <a>
    //           <Icon name="user" />
    //           22 Friends
    //         </a>
    //       </Card.Content>
    //       <Card.Content extra>
    //         <div className="ui two buttons">
    //           <Button basic color="green">
    //             GO-TO Song
    //           </Button>
    //           <Button basic color="pink">
    //             WANT-TO Sing
    //           </Button>
    //         </div>
    //       </Card.Content>
    //     </Card>
  );
};

export default Lyrics;
