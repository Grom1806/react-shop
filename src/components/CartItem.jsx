import React from 'react'
import { FaTrash } from 'react-icons/fa'
const CartItem = (props) => {
	return (
		<div className='item'>
      <img src={props.item.image} alt="" />
			<h2>{props.item.title}</h2>
			<b>{props.item.price}$</b>
			<FaTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>
    </div>
	)
}

export default CartItem