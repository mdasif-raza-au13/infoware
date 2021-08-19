import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"

const Header = () => {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><h2>DenyDesign</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page"><span className="fs-5">Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <a href="#prod" className="nav-link active" aria-current="page"><span className="fs-5">Products</span></a>
                            </li>

                        </ul>
                        <div className="d-flex">
                            {currentUser ?
                                <>
                                    <strong>{currentUser.email}</strong>&nbsp;&nbsp;
                                    <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>Logout</button>
                                </> :
                                <>
                                    <Link to="/login" className="nav-link active" aria-current="page"><button className="btn btn-outline-success" type="button">Login</button></Link>&nbsp;&nbsp;
                                    <Link to="/signup" className="nav-link active" aria-current="page"><button className="btn btn-outline-warning" type="bitton">Singnup</button></Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
            </nav>
        </>
    )
}

export default Header
