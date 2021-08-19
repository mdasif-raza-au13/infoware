import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from "../context/AuthContext";
import { useHistory, Redirect } from "react-router-dom";

const Signup = () => {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        phone: "",
        mobile: "",
        email: "",
        password: "",
        cName: "",
        cWebsite: "",
        cAddress: "",
        address2: "",
        city: "",
        state: ""
    })

    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
        try {
            setError("")
            setLoading(true)
            await signup(formData.email, formData.password)
            history.push("/login")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <>
            {
                currentUser === null ?
                    <>
                        <Header />
                        <div className="container">
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <form className="container my-2" onSubmit={(e) => handleSubmit(e)}>
                                <div className="row">
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="fName" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="fName" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.fName} name="fName" required />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="lName" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="lName" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.lName} name="lName" />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone</label>
                                            <input type="phone" className="form-control" id="phone" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.phone} name="phone" />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="mobile" className="form-label">Mobile Phone</label>
                                            <input type="phone" className="form-control" id="mobile" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.mobile} name="mobile" required />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.email} name="email" required />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.password} name="password" required />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="cName" className="form-label">Comapny Name</label>
                                            <input type="text" className="form-control" id="cName" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.cName} name="cName" required />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="cWebsite" className="form-label">Comapny Website</label>
                                            <input type="text" className="form-control" id="cWebsite" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.cWebsite} name="cWebsite" />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="cAddress" className="form-label">Company Address</label>
                                            <input type="text" className="form-control" id="cAddress" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.cAddress} name="cAddress" required />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="address2" className="form-label">Address2</label>
                                            <input type="text" className="form-control" id="address2" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.address2} name="address2" />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="city" className="form-label">City</label>
                                            <input type="text" className="form-control" id="city" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.city} name="city" required />
                                        </div>
                                    </div>
                                    <div className="col-6 my-2">
                                        <div className="mb-3">
                                            <label htmlFor="state" className="form-label">State</label>
                                            <input type="text" className="form-control" id="state" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.state} name="state" required />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" disabled={loading} className="btn btn-outline-secondary mt-2">Signup</button>&nbsp;&nbsp;
                            </form>
                        </div>
                        <Footer />
                    </> : <Redirect to='/' />}
        </>
    )
}

export default Signup
