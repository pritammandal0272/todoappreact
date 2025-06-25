import { useRef, useState } from "react";
import Container from "./Components/container";
import { InputListBox } from "./Components/InputList";
import { Items } from "./Components/Items";
import { Message } from "./Components/Message";
import AlertBox from "./Components/AlertBox"; 
import ContextAPI from "./Store/ContextAPI";
function App(){
  const [addValue,setaddValue] = useState([]);
  const TodoInputValue = useRef();
  const DateInputValue = useRef();
  const CheckEditClick = useRef(false);
  const CheckEditClickIndex = useRef();
  const [AlertBoxShow,setAlertBoxShow] = useState(false);
  const Restore = useRef([]);
  const AddTodoItem = (TodoValue,Date) => {
    if(CheckEditClick.current){
      const EditValueAdd = [...addValue];
      EditValueAdd[CheckEditClickIndex.current] = {todo: TodoInputValue.current.value,date: DateInputValue.current.value}
      setaddValue(EditValueAdd);
      CheckEditClick.current = false;
        setAlertBoxShow(false);
      return;
    }  
    if(TodoValue && Date){
        const NewObj = [...addValue,{todo: TodoValue,date: Date}]
        setaddValue(NewObj);  
        setAlertBoxShow(false);
      }else{
        setAlertBoxShow(true);
      }
  }
  const DeleteItem = (Index) => {
      TodoInputValue.current.value = "";
      DateInputValue.current.value = "";
      const DeleteTodo = addValue.filter((e) => addValue.indexOf(e) != Index);
      const RestoreItem = [...Restore.current,addValue.filter((e) => addValue.indexOf(e) == Index)];
      Restore.current = [...RestoreItem];
      setaddValue(DeleteTodo);
  }
  const EditTodo = (TodoData,TodoDate) => {
    console.log(TodoData,TodoDate);
    
    TodoInputValue.current.value = TodoData;
    DateInputValue.current.value = TodoDate;
  }
  const RestoreFunction = () => {
    if(Restore.current.length == 0){
      alert("sjf");
    }else{
    const AddAllRestoreTodo = [...addValue,...Restore.current].flat();
    Restore.current = []; 
    console.log(AddAllRestoreTodo);
    
    setaddValue(AddAllRestoreTodo);
  }

  }
  return <>
    <Container>
      <ContextAPI.Provider value={{
        addValue,
        TodoInputValue,
        DateInputValue,
        AddTodoItem,
        DeleteItem,
        EditTodo,
        CheckEditClick,
        CheckEditClickIndex,
        AlertBoxShow,
        RestoreFunction
        }}>
        <AlertBox />
        <h1 className="text-[30px] font-bold text-blue-500">New Type Todo App</h1>
        <InputListBox/>
        <Message/>
        <Items />
      </ContextAPI.Provider>
    </Container>
  </>
}
export default App;