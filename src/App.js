import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from "@atlaskit/button"
import { useState } from "react";
import { v4 } from 'uuid';
import React, { useEffect, useCallback } from "react";

const TODO_APP_STORAGE = 'TODO_APP';

function App() {
  //  state: dữ liệu 'nội tại' của component hiện tại
  // prop: các dữ liệu truyền từ element cha
  const [todoList, setTodoList] = useState([]);
  const [textInput, setInputText] = useState("");

  useEffect(() => {
    const storageTodoList = localStorage.getItem(TODO_APP_STORAGE);
    if(storageTodoList){
      setTodoList(JSON.parse(storageTodoList));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = 
    useCallback((e) => {
      setInputText(e.target.value);
    }, []);

  const onAddButtonClick = 
    useCallback((e) => {
      setTodoList([{id: v4(), name: textInput, isCompleted: false}, ...todoList]);
      setInputText("");
    }, [textInput, todoList]);

  const onCheckBtnClick = (id) => {
    setTodoList(prevSate => prevSate.map(todo => todo.id === id ? {...todo, isCompleted: true} : todo));
    
  }

  const onTrashBtnClick = (id) => {
    const newTodoList = [...todoList];
    newTodoList.splice(id, 1);
    setTodoList(newTodoList);
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
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} onTrashBtnClick={onTrashBtnClick}/> 
    </div>
  );
}

export default App;
