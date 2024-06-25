import React from 'react';
import backgroundImage from '../../assets/bg_login.jpg';
import Logo from '../../assets/pedulink.png'
import Footer from './Footer';

const Login = () => {
    return (
        
        <div
            className="hero is-fullheight"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <nav className="navbar is-fixed-top" style={{ backgroundColor: '#FFFFFF'}} role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item mt-1" href="/">
                            <img src={Logo} alt="logo" style={{ maxWidth: '150px', maxHeight: 'none' }} />
                        </a>
                    </div>
                </div>
            </nav>
            <div className="hero-body" style={{ marginTop: '75px', padding: '60px', minHeight: '100vh'}}>
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <div className="box" style={{ backgroundColor: 'rgba(0, 0, 0, 0.44', width: '400px'}}>
                                <h1 className="title has-text-centered has-text-white" style={{ paddingTop: '20px'}}>Welcome Back!</h1>
                                <p className='has-text-centered has-text-white'>Please enter your detail.</p>
                                <form>
                                    <div className="field" style={{ paddingTop: '20px'}}>
                                        <label className="label has-text-white">Email</label>
                                        <div className="control">
                                            <input className="input" type="email" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label has-text-white">Password</label>
                                        <div className="control">
                                            <input className="input" type="password" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="field" style={{ paddingTop: '30px'}}>
                                        <div className="control">
                                            <button className="button is-primary is-fullwidth has-text-weight-bold mb-4">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;