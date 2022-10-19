import {useState,useEffect} from "react";

const initialValues = {
  fName: "",
  cellNumber: ""
};
function Form({contacts,addContact}) {


  const [inputText, setInput] = useState(initialValues);

  //if there is a change in contacts,inputText will be empty
   useEffect(() => {
     setInput(initialValues);
   }, [contacts]);
 // end

 //controlling which input triggered and assigning its value
  function handleChange(event) {

    //object destructuring
    const {value,name} = event.target;

    //protecting previous values and altering the new inputText
    setInput(() => {
      return {
        ...inputText,
        [name]: value
      }
    });


  }

// if button is clicked,this function is called
  function addItem(event) {
    event.preventDefault();

    //if input includes just spaces,not add!
    if(inputText.fName.trim()==="" || inputText.cellNumber.trim()===""){
      return false;
    }else{
      addContact([...contacts, inputText]);
    }

  }

  return (
    <div>

    <div>
    <input onChange ={handleChange} name = "fName" placeholder = "First Name" value = {inputText.fName} autoComplete="off"></input>
    </div>

    <div>
    <input onChange ={handleChange} name = "cellNumber" placeholder = "Phone Number" value = {inputText.cellNumber} autoComplete="off"></input>
    </div>

    <button className="btn btn-primary" onClick ={addItem}> Click here for adding a person </button>

    </div>
  )
}
export default Form;
