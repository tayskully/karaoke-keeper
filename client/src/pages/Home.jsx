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
        <SongCard 
        song = {{
          title: "thriller",
          artist: "michael jackson",
          lyrics: "blah blah",
          category: "want to sing"
        }} />
        <SongCard 
        song = {{
          title: "someone like you",
          artist: "adele",
          lyrics: "blah blah",
          category: "go-to song"
        }} />
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
