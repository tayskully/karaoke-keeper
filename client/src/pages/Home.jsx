import { Icon, Form } from "semantic-ui-react";
import SongCard from "../components/SongCard";


const Home = () => {

  // const [formState, setFormState] = useState({
  //   thoughtText: '',
  //   thoughtAuthor: '',
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      //trigger fetch request here
      console.log("trying to submit");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <Form.Input
        inverted
        icon={<Icon circular link search />}
        onSubmit={handleFormSubmit}
        name="search"
        // value={searchInput}
        placeholder="Search for a song..."
      />
      <div className="container">
        <SongCard />
      </div>

      {/* <div>
        {songData.map((song) => (
          <SongCard song={song} key={song.artist} />
        ))}
      </div> */}
    </main>
  );
};
export default Home;

//pass the props to the component here^ to render component on page
