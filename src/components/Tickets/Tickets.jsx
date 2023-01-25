import './tickets.scss'
import ticketsData from './ticketsData'
export const Tickets = () => {
    return (
        <div className='tickets '>
        <div className='tickets__content'>
        <div className='tickets__wrap'>
        <h2 className='tickets__title fw-bold'>Unresolved tickets</h2>
        <a className='tickets__link' href="#/" >View details</a>
        </div>
        <p className='tickets__group m-0'>Group: <span className='tickets__support'>Support</span></p>
        
        </div>
        
        <ul className='tickets__list list-unstyled'>
        {
            ticketsData.map((ticket) => 
            <li className='tickets__item'>
            <div className='tickets__item-wrap'>
            <span className='tickets__table'>{ticket.text}</span>
            <p className='tickets__price'>{ticket.number}</p>
            </div>
            <span className='tickets__line'></span>    
            </li>)
        }
        
        </ul>
        </div>
        )
    }