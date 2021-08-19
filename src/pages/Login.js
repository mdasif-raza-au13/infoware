import React, { useState } from 'react'
import bgImage from '../images/bg_img.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Redirect, useHistory } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const { login, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(formData.email, formData.password)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    return (
        <>
            {
                currentUser === null ?
                    <>
                        <Header />
                        <div className="container-fluid my-5 d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
                            <h1 className="my-5">DenyDesigns.</h1>
                            <span className="fs-2">WHOLESALE LOGIN</span>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <div className="container-fluid" style={{ width: "60%" }}>
                                <form className="my-5" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.email} name="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.password} name="password" required />
                                    </div>
                                    <button type="submit" disabled={loading} className="btn btn-outline-secondary mt-2 align-self-center">Login</button>
                                </form>
                            </div>
                        </div>
                        <Footer />
                    </> : <Redirect to='/' />
            }

        </>
    )
}

export default Login
