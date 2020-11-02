// import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
// import { API, Storage } from 'aws-amplify';
// import { listTodos } from './graphql/queries'
// import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation} from './graphql/mutations'

// const initialFormState = { name: '', description: '' }

function App() {
  // const [notes, setNotes] = useState([]);
  // const [formData, setFormData] = useState([]);

  // useEffect( () => {
  //   fetchNotes();
  // }, []);
  

  // async function onChange(e) {
  //   if (!e.target.files[0]) return
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, image: __filename.name });
  //   await Storage.put(file.name, file);
  //   fetchNotes();
  // }

  // async function fetchNotes() {
  //   const apiData = await API.graphql( {query: listTodos });
  //   // const notesFromAPI = apiData.data.listTodos.items;
  //   // await Promise.all(notesFromAPI.map(async note => {
  //   //   if (note.image) {
  //   //     const image = await Storage.get(note.image);
  //   //     note.image = image;
  //   //   }
  //   //   return note;
  //   // }))
  //   setNotes(apiData.data.listTodos.items);
  // }

  // async function createNote() {
  //   if (!formData.name || !formData.description) return;
  //   await API.graphql({ query: createTodoMutation, variables: { input: formData }});
  //   // if (formData.iamge) {
  //   //   const image = await Storage.put(formData.image);
  //   //   formData.image = image;
  //   // }
  //   setNotes([ ...notes, formData ]);
  //   setFormData(initialFormState);
  // }

  // async function deleteNote({ id }) {
  //   const newNotesArray = notes.filter(note => note.id !== id);
  //   setNotes(newNotesArray);
  //   await API.graphql({ query: deleteTodoMutation, variables: { input: { id }}});
  // }

  // return (
  //   <div className="App">
  //     <h1>My Notes App</h1>
  //     {/* <input
  //     type='file'
  //     onChange={onChange}
  //     /> */}
  //     <input 
  //     onChange={e => setFormData({ ...formData, 'name': e.target.value })}
  //     placeholder="Note Name"
  //     value={formData.name}
  //     />
  //     <input
  //     onChange={e => setFormData({ ...formData, 'description': e.target.value})}
  //     placeholder='Note description'
  //     value={formData.description}
  //     />
  //     <button onClick={createNote}>Create Note</button>
  //     <div style={{marginBottom: 30}}>
  //       {
  //         notes.map(note => (
  //           <div key={note.id || note.name}>
  //             <h2>{note.name}</h2>
  //             <p>{note.description}</p>
  //             <button onClick={() => deleteNote(note)}>Delete Note</button>
  //           </div>
  //         ))
  //       }
  //     </div>
  //     <AmplifySignOut />
  //   </div>
  // );


  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
