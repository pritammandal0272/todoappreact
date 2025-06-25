import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import ContextAPI from "../Store/ContextAPI";
export const Items = () => {
    const {addValue} = useContext(ContextAPI);
    const {DeleteItem} = useContext(ContextAPI);
    const {EditTodo} = useContext(ContextAPI);
    const {CheckEditClick} = useContext(ContextAPI);
    const {CheckEditClickIndex} = useContext(ContextAPI);
    return <>
    {
        addValue.map((item) => {
            return <div key={item.Name} className='flex justify-between w-[100%] h-[6vh] items-center'>
                <h1 className='w-[50%]'>{item.todo}</h1>
                <h1 className='35%'>{item.date}</h1>
                <div className='w-[15%] flex justify-between gap-1'> 
                    <button type="button" class="w-[50%] text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" >
                    <MdDeleteForever className='w-[20px] h-[20px]'  onClick={() => {
                        DeleteItem(addValue.indexOf(item));
                    }} />
                    </button>
                    <button type="button" class="w-[50%] text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" >
                    <FaEdit className='w-[20px] h-[20px]' onClick={() => {
                        EditTodo(item.todo,item.date);
                        CheckEditClick.current = true;
                        CheckEditClickIndex.current = addValue.indexOf(item);
                    }}/>
                    </button>
                </div>
            </div>
        })
    }
    </>
}