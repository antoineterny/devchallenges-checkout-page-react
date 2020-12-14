import React, { Component } from "react"

const TotalPrice = ({ totalCounters }) => {
	return (
		<React.Fragment>
			<div className="addition" id="shipping">
				<span>Shipping</span>
				<span>$19</span>
			</div>
			<div className="addition">
				<span>Total</span>
				<span id="total">${totalCounters}</span>
			</div>
		</React.Fragment>
	)
}

class Counters extends Component {
	render() {
		const { products, onIncrement } = this.props

		return (
			<React.Fragment>
				{products.map(product => (
					<Counter key={product.id} onIncrement={onIncrement} product={product} />
				))}
			</React.Fragment>
		)
	}
}

class Counter extends Component {
	render() {
		const { imageUrl, description, price, discount, value } = this.props.product
		return (
			<div className="product">
				<img src={imageUrl} alt={description} />
				<div className="description">
					<div className="details">
						<h3>{description}</h3>
						<div className="price">
							${price}
							<span>${discount}</span>
						</div>
					</div>
					<div className="quantity">
						<button onClick={() => this.props.onIncrement(this.props.product, -1)} className="minus">
							<i className="material-icons">remove</i>
						</button>
						<span>{value}</span>
						<button onClick={() => this.props.onIncrement(this.props.product, 1)} className="plus">
							<i className="material-icons">add</i>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

class App extends Component {
	state = {
		products: [
			{
				id: 1,
				value: 0,
				price: 54.99,
				discount: 94.99,
				description: "Vintage Backpack",
				imageUrl: "photo1.png"
			},
			{
				id: 2,
				value: 0,
				price: 74.99,
				discount: 124.99,
				description: "Levi Shoes",
				imageUrl: "photo2.png"
			}
		]
	}

	handleIncrement = (product, amount) => {
		const products = [...this.state.products]
		const index = products.indexOf(product)
		products[index] = { ...product }
		products[index].value += amount
		products[index].value = products[index].value < 0 ? 0 : products[index].value
		this.setState({ products })
	}

	render() {
		console.log(this.state.products)
		console.log(this.state.products.filter(c => c.value !== 0).length)
		let totalPrice = 0
		this.state.products.forEach(c => {
			totalPrice += c.value * c.price
		})
		return (
			<React.Fragment>
				<Counters products={this.state.products} onIncrement={this.handleIncrement} />
				<TotalPrice
					totalCounters={this.state.products.filter(c => c.value !== 0).length === 0 ? 0 : (totalPrice + 19).toFixed(2)}
				/>
			</React.Fragment>
		)
	}
}

export default App
