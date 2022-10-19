import {useState} from "react";


function List({contacts}){

  const [filterText,setFilterText] = useState("");

  const handleFilter = (event) => {
    const newFilter=event.target.value;
    setFilterText(newFilter);
  }



  const filteredArray=contacts.filter((contact)=>{
    return Object.keys(contact).some((key) =>
    contact[key].toString().toLowerCase().includes(filterText.toLowerCase()));
  });


  return(
    <div>
     <ul className="list-group list-group-flush">
       {
         filteredArray.length!==0  ?
         filteredArray.map((item,index) => <li className="list-group-item-action" key={index}>{item.fName.toUpperCase()} {" "} {item.cellNumber}</li>)
         : "Not Found!"
       }
     </ul>
     <input className="form-control" name="filterText" placeholder="Search" onChange={handleFilter} value={filterText} autoComplete="off"></input>
    </div>
  )
}
export default List;
