import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import ProductComponent from "./ProductComponent"

ReactDOM.render(
	<div className="products">
		<ProductComponent name="Vintage Backbag" price="54.99" discount="94.99" imageUrl="photo1.png" />
		<ProductComponent name="Levi Shoes" price="74.99" discount="124.99" imageUrl="photo2.png" />
		<div className="addition" id="shipping">
			<span>Shipping</span>
			<span>$19</span>
		</div>
		<div className="addition">
			<span>Total</span>
			<span id="total">$148.98</span>
		</div>
	</div>,
	document.getElementById("aside")
)
