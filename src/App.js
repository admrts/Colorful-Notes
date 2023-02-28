import "./App.css";
import Container from "./components/Container";
import NoteList from "./components/NoteList";
import Searcbar from "./components/Searcbar";

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
