import './tasks.scss'
import { useRef, useState } from 'react'

export const Tasks = () => {
    let itemText = useRef()
    let [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Finish ticket update',
            isComleted: false,
            urgent: true,
            new: false,
            def: false
            
        }
    ])
    let [closes, setCloses] = useState(true)
    
    let inputValue = useRef()
    let [urgent, setUrgent] = useState()
    
    let handleSubmit = (evt) => {
        evt.preventDefault()
        setCloses(false)
        console.log(inputValue.current.value);
        
        inputValue.current.value = ''
    }
    
    let modalClose = () => {
        setCloses(true)
        
    }
    
    let urgents = (evt) => {
        todos[0].urgent = !todos[0].urgent
        setUrgent(todos[0].urgent);
        console.log(urgent);
        
    }
    
    let sendModal = () => {
        // console.log(itemText.current);
        
        setCloses(true)
        
    }
    
    
    return (
        <div className='tasks col-md-6 col-lg-6 col-xl-6'>
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
            <input className='form-check-input rounded-5' type="checkbox" />
            <span className='tasks__table ms-3'>{item.text}</span>
            </div>
            <button className={item.urgent ? 'btn btn-warning tasks__price' : 'tasks__price'}
           
            >Urgent</button>
            </div>
            <span className='tasks__line'></span>    
            </li>)
        }    
        </ul>
        
        <div className={closes ? 'tasks__modal shadow d-none': 'tasks__modal shadow'}>
        <i onClick={modalClose} class="fa-solid fa-xmark text-muted"></i>
        <p className='modal__title'>Select status</p>
        <div className='d-flex justify-content-between modal__btns'>
        <button onClick={urgents} className='btn btn-warning text-white'>Urgent</button>
        <button   className='btn btn-success'>New</button>
        <button  className='btn btn-light text-muted'>Default</button>
        </div>
        <button onClick={sendModal} className='btn btn-light text-muted w-100 mb-2'><span className='fs-5'>+</span></button>
        </div>
        </div>
        )
    }