import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container my-5">
                <hr />
                <div className="row">
                    <div className="col-sm-4 mt-4">
                        <h5>COMAPNY</h5>
                        <div className="d-flex flex-column mt-3">
                            <span>Shipping</span>
                            <span>Work With Us</span>
                            <span>Return Policy</span>
                            <span>Terms and Conditions</span>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-4">
                        <h5>FOLLOW US OUT THERE</h5>
                        <div className="d-flex flex-column mt-3">
                            <span><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={{ color: "black", textDecoration: "none" }}>Facebook</a></span>
                            <span><a href="https://www.twitter.com/" target="_blank" rel="noreferrer" style={{ color: "black", textDecoration: "none" }}>Twitter</a></span>
                            <span><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" style={{ color: "black", textDecoration: "none" }}>Pinterest</a></span>
                            <span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={{ color: "black", textDecoration: "none" }}>Instagram</a></span>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-4">
                        <h5>THANK YOU</h5>
                        <div className="d-flex flex-column mt-3">
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam illo ad doloribus, culpa amet incidunt. Velit repellendus nihil, aspernatur !</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
