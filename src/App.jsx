import { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditNoteIcon from '@mui/icons-material/EditNote';
import IconButton from "@mui/material/IconButton";

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
    // you have to use a callback, inside the setItemList
    // because When you initially assign a callback (like onRemove) to a button,
    // the callback captures the state of itemList at that specific moment in time.
    // This means if you update itemList later, the callback still "remembers" the state as it was when the callback was first assigned.
    // thus then it uses the outdated version of itemList

    let id = e.target.parentElement.parentElement.id;

    setItemList((previtemList) =>
      previtemList.filter((item) => item.props.id != id)
    );
  };
  const enterTrigger = (e) => {
    if (e.keyCode === 13) handleClick();
  };

  const handleClick = () => {
    if (value) {
      let unique = Date.now().toString();
      const item = (
        <div
          className="flex gap-2 bg-lightGreen rounded-xl p-2 justify-between"
          id={unique}
          key={unique}
        >
          <div className="flex gap-4 items-center">

          <input
            onClick={handleCheck}
            type="checkbox"
            value={value}
            id={unique}
          />
          <label htmlFor={unique}>{value}</label>
          </div>
          <IconButton
            aria-label="delete"
            onClick={onRemove}
            id={unique}
            size="small"
          >
            <DeleteRoundedIcon className="text-darkGreen" />
          </IconButton>
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
          <h1 className="text-center font-bold text-white text-2xl">My TODO List ✏</h1>
          <div className="flex gap-2">
            <input
              className="bg-darkGreen border- border-2 rounded-xl p-2"
              placeholder="Enter a task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              onKeyDown={enterTrigger}
            />
            <button
              className="bg-midGreen p-2 rounded-xl text-lime-900 font-bold text-green"
              onClick={handleClick}
            >
              Add Item
            </button>
          </div>

          <div className="flex flex-col gap-2">{itemList}</div>
        </div>
      </div>
    </>
  );
}

export default App;
