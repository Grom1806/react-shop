import React from 'react'

const Item = ({ onShowFullItem, item, onAdd}) => {
	return (
		<div onClick={() => onShowFullItem(item)} className='item'>
			<img src={item.image} alt="" />
			<h2>{item.title}</h2>
			<b>{item.price}$</b>
			<div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
		</div>
	)
}

export default Item