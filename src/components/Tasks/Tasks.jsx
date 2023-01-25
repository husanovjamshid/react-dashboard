import './tasks.scss'
import { useRef, useState } from 'react'
import tasks from './taskData'

export const Tasks = () => {
    let [modalTask, setModalTask] = useState()
    let [modalClass, setModalClass] = useState()
    let itemText = useRef()
    let [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    let [closes, setCloses] = useState(true)
    
    let inputValue = useRef()
    
    let handleSubmit = (evt) => {
        evt.preventDefault()
        setCloses(false) 
    }
    
    let modalClose = () => {
        setCloses(true)
        
    }
    
    let sendModal = (evt) => {
        evt.preventDefault()
        
        setTodos([
            {
                id: todos.at(-1)?.id + 1 || 1,
                text: inputValue.current.value,
                isComleted: false,
                isTask: modalTask,
                isClass: modalClass
            },
            ...todos,
            
        ])
        setCloses(true)
        inputValue.current.value = ''
    }
    
    let tasksBtn = (evt) => {
        evt.preventDefault()
        let todoId = evt.target.dataset.todoId
        let findTodo = tasks.find((item) => item.id == todoId)
        
        setModalTask(findTodo.text);
        setModalClass(findTodo.class)
    }
    
    let changeChecked = (evt) => {
        let todoId = evt.target.dataset.todoId
        let findTodo = todos.find((item) => item.id == todoId)
        findTodo.isComleted = !findTodo.isComleted
        setTodos([...todos])
        
    }
    
    localStorage.setItem('todos', JSON.stringify(todos))
    
    return (
        <div className='tasks '>
        <div className='tasks__content'>
        <div className='tasks__wrap'>
        <h2 className='tasks__title fw-bold'>Tasks</h2>
        <a className='tasks__link' href="#/" >View all</a>
        </div>
        <p className='tasks__group m-0'>Today</p>
        
        </div>
        
        <form onSubmit={handleSubmit} className='task__form'>
        <div className='input-group'>
        <input ref={inputValue} className='task__input' type="text" placeholder='Create new task' />
        <button className='tasks__btn ms-auto' type="submit"><i type='submit' class="fa-solid fa-circle-plus  text-muted"></i></button>
        </div>
        </form>
        <span className='tasks__line'></span>
        
        <ul className='tasks__list list-unstyled'>
        
        {
            todos.map((item) => 
            <li className='tasks__item'>
            <div className='tasks__item-wrap'>
            <div>
            <input  data-todo-id={item.id} checked={item.isComleted} onChange={changeChecked} className='form-check-input rounded-5' type="checkbox" />
            <span className='tasks__table ms-3'>{item.text}</span>
            </div>
            <button className={item.isClass}       
            >{item.isTask}</button>
            </div>
            <span className='tasks__line'></span>    
            </li>)
        }    
        </ul>
        
        <form className={closes ? 'tasks__modal shadow d-none': 'tasks__modal shadow'}>
        <i onClick={modalClose} class="fa-solid fa-xmark text-muted"></i>
        <p className='modal__title'>Select status</p>
        <div className='d-flex justify-content-between modal__btns'>
        {
            tasks.map((item) => <button data-todo-id={item.id} onClick={tasksBtn} className={item.class}>{item.text}</button>)
        }
        </div>
        <button type='submit' onClick={sendModal} className='btn btn-light text-muted w-100 mb-2'><span className='fs-5'>+</span></button>
        </form>
        </div>
        )
    }