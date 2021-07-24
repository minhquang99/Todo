import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from "@atlaskit/button"
import { useState } from "react";
import { v4 } from 'uuid';

function App() {
  //  state: dữ liệu 'nội tại' của component hiện tại
  // prop: các dữ liệu truyền từ element cha
  const [todoList, setTodoList] = useState([]);
  const [textInput, setInputText] = useState("");

  const onTextInputChange = 
    (e) => {
      setInputText(e.target.value);
    }

  const onAddButtonClick = 
    (e) => {
      setTodoList([{...todoList, id: v4(), name: textInput, isCompleted: false}]);
    }


  
  return (
    <div>
      <h3>Danh sách cần làm</h3>
      <Textfield name='add-todo' placeholder='Việc cần làm...' elemAfterInput={
      <Button isDisabled={!textInput} appearance='primary' onClick={onAddButtonClick}>
        Thêm
      </Button>
      }
      value={textInput}
      onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList}/> 
    </div>
  );
}

export default App;
