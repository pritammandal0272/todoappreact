import { useContext } from "react"
import ContextAPI from "../Store/ContextAPI"

export const Message = () => {
    const {addValue} = useContext(ContextAPI);
    return <>
        {addValue.length == 0 ? <h1 className="text-[20px] font-bold text-gray-500">Now Todo Empty !</h1> : null}
    </>
}