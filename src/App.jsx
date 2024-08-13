import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([]);
  const [value, setValue] = useState("");

  const handleCheck = (e) => {
    let id = e.target.id;

    document
      .querySelector(`label[for = "${id}"]`)
      .classList.toggle("line-through");
  };

  const onRemove = (e) => {
    console.log(itemList);

    let id = e.target.id;
    setItemList(itemList.filter((item) => item.id != id));
    

  };

  const handleClick = () => {
    if (value) {
      let unique = Date.now().toString()
      const item = (
        <div className="flex gap-2 bg-lightGreen rounded-xl p-2" id={unique} key={unique}>
          <input
            onClick={handleCheck}
            type="checkbox"
            value={value}
            id={unique}
          />
          <label htmlFor={unique}>{value}</label>
          <button id={unique} onClick={onRemove}>Remove</button>
        </div>
      );
      setValue("");
      setItemList([...itemList, item]);
      
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-yellow">
        <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-darkGreen rounded-xl">
          <div className="flex gap-2">
          <input
            className="bg-darkGreen border- border-2 rounded-xl p-2"
            placeholder="Enter a task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button className="bg-midGreen p-2 rounded-xl text-lime-900 font-bold" onClick={handleClick}>Add Item</button>
          </div>
          
          <div className="flex flex-col gap-2">{itemList}</div>
        </div>
      </div>
    </>
  );
}

export default App;
