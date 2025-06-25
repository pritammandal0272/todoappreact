import { useContext, useRef } from 'react'
import './Style.css'
import ContextAPI from '../Store/ContextAPI'
export const InputListBox = () => {
    const {TodoInputValue} = useContext(ContextAPI);
    const {DateInputValue} = useContext(ContextAPI);
    const {AddTodoItem} = useContext(ContextAPI);
    const {RestoreFunction} = useContext(ContextAPI);
    return <>
        <div className='flex justify-between w-[100%] h-[6vh] mb-8 gap-2'>
            <div className='w-[40%]'>
            <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your Todo..</label>
            <input ref={TodoInputValue} type="text" id="success" class=" bg-green-50 border border-green-500 text-black dark:text-black placeholder-black dark:placeholder-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:border-green-500 w-full" placeholder="Enter Todo Here" />
            </div>

            <div className='w-[30%]'>
            <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Date</label>
            <input ref={DateInputValue} type="date" class=" bg-green-50 border border-green-500 text-green-900 dark:text-black placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:border-green-500 w-full" placeholder="Enter Todo Here" />
            </div>
            <div className='w-[30%] mt-[3.1em] flex items-center justify-between'>
            <button class="bg-blue-500 text-white font-bold w-[48%] md:text-[15px] text-[12px]"  onClick={() => {
                AddTodoItem(TodoInputValue.current.value,DateInputValue.current.value);
                TodoInputValue.current.value = "";
                DateInputValue.current.value = "";
            }}>Add</button>
            <button class="bg-blue-500 text-white font-bold w-[48%] md:text-[15px] text-[12px]" onClick={() => {
                RestoreFunction();
            }}>Restore</button>
            </div>
        </div>
    </>
}