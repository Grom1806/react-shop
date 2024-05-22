import React, { useEffect, useState } from 'react'
import Item from './Item'

const Items = (props) => {
	const [products, setProducts] = useState([])
	const isCategories = `https://fakestoreapi.com/products/${
		props.isCategories.length == 0 ? '' : props.isCategories
	}`
	useEffect(() => {
		let isMounted = true // Отслеживаем, смонтирован ли компонент

		const fetchData = async () => {
			try {
				const response = await fetch(isCategories)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const data = await response.json()
				if (isMounted) {
					setProducts(data)
				}
			} catch (error) {
				console.error('Failed to fetch products:', error)
			}
		}

		fetchData()

		return () => {
			isMounted = false // Функция очистки для установки isMounted в false при размонтировании
		}
	}, [isCategories])
	return (
		<main>
			{products.map((items) => (
				<Item
				onShowFullItem={props.onShowFullItem}
					key={items.id}
					item={items}
					onAdd={props.onAdd}
				/>
			))}
		</main>
	)
}

export default Items
