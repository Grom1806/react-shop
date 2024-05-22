import React from 'react'

const Categories = (props) => {
	const categoriesArr = [
		{
			key: '',
			name: 'all',
		},
		{
			key: "category/men's clothing",
			name: "men's clothing",
		},
		{
			key: "category/women's clothing",
			name: "women's clothing",
		},
		{
			key: 'category/jewelery',
			name: 'jewelery',
		},
		{
			key: 'category/electronics',
			name: 'electronics',
		},
	]
	return (
		<div className='categories'>
			{categoriesArr.map((item) => {
				return (
					<div
						onClick={() => props.setIsCategories(item.key)}
						key={item.key}
					>
						{item.name}
					</div>
				)
			})}
		</div>
	)
}

export default Categories
