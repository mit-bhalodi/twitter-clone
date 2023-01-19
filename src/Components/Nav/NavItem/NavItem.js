import React from 'react'
import './NavItem.css';

export default function NavItem(props) {
    return (
        <div className='nav__item my-2'>
            <div className='nav__item__inner'>
                <i className='material-symbols-rounded font-size-26'>{props.icon}</i>
                <div className='mx-2'>{props.title}</div>
            </div>
        </div>
    )
}
