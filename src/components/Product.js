import React from 'react'
import { Link } from 'react-router-dom';

const Product = () => {

    let list = [1,2,3,4,5,6,7,8,9,10,11,12];

    const prod = list.map((element) => (<div  key={element} className="col my-4">
    <div className="card" style={{ width: "18rem" }}>
        <Link to="/buy?image=https://picsum.photos/300"><div className="card-body">
            <img src="https://picsum.photos/300" className="card-img-top" alt="product_img" />
        </div></Link>
    </div>
</div>))

    return (
        <>
            <div className="container my-4 mx-auto">
                <div className="row" id="prod">
                    {prod}
                </div>
            </div>
        </>
    )
}

export default Product
