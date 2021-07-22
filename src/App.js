import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from "@atlaskit/button"

function App() {
  return (
    <div>
      <h3>Danh sách cần làm</h3>
      <Textfield name='add-todo' placeholder='Việc cần làm...' elemAfterInput={
      <Button isDisabled={true} appearance='primary'>
        Thêm
      </Button>
      }
      ></Textfield>
      <TodoList/>
    </div>
  );
}

export default App;
