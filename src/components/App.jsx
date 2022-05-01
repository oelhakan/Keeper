import React, {useState} from "react";
import Note from "./Note.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){

    const [notes, setNotes] = useState([]);

    function handleAdd(note){
        setNotes((prev) => [...prev, note]);
    }

    function handleDelete(id){
        setNotes((prev) => {
            return prev.filter((item, index) => {
                return index !== id;
            });
        })
    }

    return <div>
        <Header />
        <CreateArea onAdd={handleAdd}/>
        {notes.map((note, index) => <Note onDelete={handleDelete} title = {note.title} content={note.content} key={index} id={index}/>)}
        <Footer />
    </div>
}

export default App;