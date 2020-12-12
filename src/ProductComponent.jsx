import React from "react"
import CounterComponent from "./CounterComponent"

// <ProductComponent name="Vintage Backbag" price="54.99" discount="94.99" imageUrl="photo1.png" />
// {name, price, discount, imageUrl}

function ProductComponent({name, price, discount, imageUrl}) {
	return (
		<div class="product">
			<img src={imageUrl} alt={name} />
			<div class="description">
				<div class="details">
					<h3>{name}</h3>
					<div class="price">
						${price}<span>${discount}</span>
					</div>
				</div>
				<CounterComponent />
			</div>
		</div>
	)
}

export default ProductComponent