import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Items from './components/Items'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowFullItem'
function App() {
	const [cartItems, setCartItems] = useState([])
	const [deletCartItems, setdeletCartItems] = useState([])
	const [isCategories, setIsCategories] = useState([])
	const [showFullitem, setShowFullItem] = useState(false)
	const [fullItem, setFullItem] = useState({})
	

	const onShowFullItem = (item) => {
		setFullItem(item)
		setShowFullItem(true)
	}

	const addItemsToCart = (items) => {
		let isInArray = false
		cartItems.forEach((item) => {
			if (item.id === items.id) {
				isInArray = true
			}
		})
		if (!isInArray) {
			setCartItems((cartItems) => [...cartItems, items])
		}
	}
	const deleteItem = (id) => {
		setCartItems((cartItems) => cartItems.filter((item) => item.id !== id))
    setdeletCartItems((deletCartItems) => [...deletCartItems, id])
	}
	return (
		<div className='wrapper' >
			<Header cartItems={cartItems} onDelete={deleteItem} />
			<Categories  setIsCategories={setIsCategories} />
			<Items onShowFullItem={onShowFullItem} isCategories={isCategories} onAdd={addItemsToCart} />
			{showFullitem && <ShowFullItem setShowFullItem={setShowFullItem } item={fullItem} onAdd={addItemsToCart}/>}
			<Footer />
		</div>
	)


}

export default App
