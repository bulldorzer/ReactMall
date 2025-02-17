import { useState } from "react"
// import {getOne} from '../../api/todoApi'
import useCustomMove from "../../hook/useCustomHook"

// 초기값 객체
const initState = {
    tno : 0,
    title : 'Test',
    writer : 'Test',
    dueDate : null,
    complete : false
}
const ReadComponent = ({tno}) =>{
    const [todo,setTodo] = useState(initState)
    const {moveToList,moveToModify} = useCustomMove();

    return(
        <>
        <ul className="readItem">
            {makeDiv('Tno',todo.tno)}
            {makeDiv('Writer',todo.writer)}
            {makeDiv('Title',todo.title)}
            {makeDiv('Due Date',todo.dueDate)}
            {makeDiv('Complete',todo.complete?'Complete' : 'Not Yet')}
        </ul>
        <div className="btnGrop">
            <button type="button" onClick={()=>{moveToList()}}>목록</button>
            <button type="button" onClick={()=>{moveToModify(tno)}}>수정</button>
        </div>
        </>
    )
}

// {return (<li>...</li>)  } 생략되어있음 
const makeDiv = (title, value) =>(
    <li>
        <p className="title">{title}</p>
        <p className="value">{value}</p>
    </li>
)




export default ReadComponent;