import Note from "./Note";
import { useSelector } from "react-redux";

function NoteList() {
  const { filteredNotes } = useSelector((store) => store.note);

  return (
    <div className="noteList">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((item, key) => {
          return <Note item={item} key={key} />;
        })
      ) : (
        <p>hello</p>
      )}
    </div>
  );
}

export default NoteList;