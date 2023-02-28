import Note from "./Note";
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
        <p>hello</p>
      )}
    </div>
  );
}

export default NoteList;
