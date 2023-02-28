import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { filterNotes } from "../../redux/noteSlice";
import "./searchbar.css";

function Searcbar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    dispatch(filterNotes(text));
  }, [text, dispatch]);
  return (
    <div className="searchDiv">
      <input
        placeholder="Search Notes"
        className="searchBar"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default Searcbar;
