import React from 'react'

const ShowFullItem = ({ item, setShowFullItem }) => {
	let setFalse = () => setShowFullItem(false)
	return (
		<div className='show-item'>
		 <h1 className='exit' onClick={setFalse}>X</h1>
			<img  src={item.image} alt="" />
      <h2>{item.title} </h2>
      <b>{item.price}$</b>
			<p>{item.description}</p>
		</div>
	)
}

export default ShowFullItem