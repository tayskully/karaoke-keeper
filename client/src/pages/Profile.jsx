import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Grid } from "semantic-ui-react";

import SongProfileCard from "../components/SongProfileCard";

import { QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};
  // if (
  //   Auth.loggedIn() &&
  //   /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username, and compare it to the userParam variable */
  //   Auth.getProfile().authenticatedPerson.username === userParam
  // ) {
  //   return <Navigate to="/me" />;
  // }

  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  let me = data?.me;
  let songs = data?.me?.songs || [];

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div>
      {Auth.loggedIn() && <h2>Welcome, {me.username} !!</h2>}
      <Grid stackable columns={3} divided>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Grid.Row>
            {songs.map((song, i) => (
              <Grid.Column key={i}>
                <div className="cardholder">
                  <SongProfileCard song={song} userId={me._id} key={me._id} />
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        )}
      </Grid>
    </div>
  );
};

export default Profile;
