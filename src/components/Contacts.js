import Form from "./Form.js";
import List from "./List.js";
import {useState} from "react";

function Contacts(){
  const [contacts,setContact] = useState([
    {
      fName:"Eralp",
      cellNumber:"59398858395"
    },

    {
      fName:"Enes",
      cellNumber:"59384738721"
    },

    {
      fName:"Sema",
      cellNumber:"448859432158"
    }
  ]);

   return(
     <div>
     <List
     contacts={contacts}
     />
     <Form
     contacts={contacts}
     addContact={setContact}
     />

     </div>




   )
}
export default Contacts;
