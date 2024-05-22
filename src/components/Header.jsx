import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CartItem from '../components/CartItem'

const showOrders = (props) => {
	let summa = 0
	props.cartItems.forEach((item) => summa += Number.parseFloat(item.price))
	return (
		<div>
			{props.cartItems.map((items, index) => (
				<CartItem
					onDelete={props.onDelete}
					key={index}
					item={items}
				/>
			))}
			<p className='summa '>Суммa: {new Intl.NumberFormat().format(summa)}$</p>
		</div>
	)
}
const showNothing = () => {
	return (
		<div className='empty'>
			<h2>Товаров нет </h2>
		</div>
	)
}

export default function Header(props) {
	let [cartOpen, setCartOpen] = useState(false)
	return (
		<header>
			<div>
				<span className='logo'>House Staff</span>
				<ul className='nav'>
					<li>Пpо нас</li>
					<li>Контакты</li>
					<li>Кабинет</li>
				</ul>
				<FaShoppingCart
					onClick={() => setCartOpen((cartOpen = !cartOpen))}
					className={`shop-cart-button ${cartOpen && 'active'}`}
				/>
			</div>
			{cartOpen && (
				<div className='shop-cart'>
					{props.cartItems.length > 0 ? showOrders(props) : showNothing()}
				</div>
			)}
			<div className='presentation'></div>
		</header>
	)
}
