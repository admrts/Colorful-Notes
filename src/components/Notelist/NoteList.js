import Note from "../Note/Note";
import "./notelist.css";
import { useSelector } from "react-redux";

function NoteList() {
  const { filteredNotes } = useSelector((store) => store.note);

  return (
    <div className="noteList">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((item) => {
          return <Note item={item} key={item.id} />;
        })
      ) : (
        <p>Note couldn't find</p>
      )}
    </div>
  );
}

export default NoteList;
