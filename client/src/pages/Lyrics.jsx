import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Card, Icon, Image, Header, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";
// import { useEffect } from "react";

import Auth from "../utils/auth";

import { GET_SINGLE_SONG } from "../utils/queries";
//add note
import { ADD_SONG } from "../utils/mutation";

const Lyrics = () => {
  //   Use `useParams()` to retrieve value of the route parameter `:songId`
  const { songId } = useParams();
  // console.log(songId);
  // parseInt because it takes Int
  const { loading, data } = useQuery(GET_SINGLE_SONG, {
    variables: { songId: parseInt(songId) },
  });

  let song = data?.song || {};

  //change to add note query
  const addNote = () => {
    const [addNote] = useMutation(ADD_SONG);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <Header size="large">{song.title}</Header> */}
      <p
        style={{ fontSize: "xx-large", marginTop: "1em", fontWeight: "bolder" }}
      >
        {song.title}
      </p>

      <hr />
      <span style={{ whiteSpace: "pre-line" }}> Lyrics:{song.lyrics}</span>

      <Form>
        <Form.Field label="add note for song" control="textarea" rows="2" />
        <Button basic color="green" onClick={addNote}>
          <Link>Add</Link>
        </Button>
      </Form>
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
