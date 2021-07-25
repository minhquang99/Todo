import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from "@atlaskit/button"
import { useState } from "react";
import { v4 } from 'uuid';

const TODO_APP_STORAGE = 'TODO_APP';

function App() {
  //  state: dữ liệu 'nội tại' của component hiện tại
  // prop: các dữ liệu truyền từ element cha
  const [todoList, setTodoList] = useState([]);
  const [textInput, setInputText] = useState("");

  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE);
    if(localStorage.getItem(storageTodoList)){
      setTodoList(JSON.parse(storageTodoList));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = 
    (e) => {
      setInputText(e.target.value);
    }

  const onAddButtonClick = 
    (e) => {
      setTodoList([{id: v4(), name: textInput, isCompleted: false}, ...todoList]);
      setInputText("");
    }

  const onCheckBtnClick = (id) => {
    setTodoList(prevSate => prevSate.map(todo => todo.id === id ? {...todo, isCompleted: true} : todo));
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
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}/> 
    </div>
  );
}

export default App;
