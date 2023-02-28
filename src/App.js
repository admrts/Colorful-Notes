import "./App.css";
import Container from "./components/Container/Container";
import NoteList from "./components/Notelist/NoteList";
import Searcbar from "./components/Searchbar/Searcbar";

function App() {
  return (
    <div className="App">
      <Container />
      <Searcbar />
      <NoteList />
    </div>
  );
}

export default App;
