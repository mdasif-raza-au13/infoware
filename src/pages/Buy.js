import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from "../context/AuthContext"

const Buy = ({ location }) => {
    const paramsImgLocation = location.search.split("=")
    const { currentUser } = useAuth()
    const handleClick = (e) => {
        e.preventDefault()
        currentUser ? alert("Thank You For Buying") : alert("Please Login First")
    }

    return (
        <div>
            <Header />
            <center>
                <div className="container my-5 row">
                    <div className="col p-0">
                        <div className="card" style={{ width: "21rem" }}>
                            <div className="card-body">
                                <img src={paramsImgLocation[1]} alt="pic" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="py-5">
                            <p className="text-center fs-3 text-decoration-underline">FRAMED ART PRINT</p>
                            <p className="text-center"><strong>Style :</strong> Classic</p>
                            <p className="text-center"><strong>Frame :</strong> White</p>
                            <p className="text-center"><strong>Size :</strong> 12" X 13"</p>
                            <button type="button" className="btn btn-outline-info" style={{ margin: "0 8rem 0 8rem" }} onClick={(e) => handleClick(e)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </center>
            <Footer />
        </div >
    )
}

export default Buy
