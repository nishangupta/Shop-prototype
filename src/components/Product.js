import React from 'react'

export default function Product() {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator responsive-img p-2"
          src="assets/product2.jpg"
          alt=""
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4 py-1">
          Watch 2020 Quatz collection new and popular
        </span>
        <p className="center-align">
          <button className="btn block waves-effect ">Add To Cart</button>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Card Title</span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  )
}
