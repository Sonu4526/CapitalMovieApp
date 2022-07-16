import React, { useState } from 'react';
import Layout from '../Core/Layout';
import { API } from '../Config';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values
    const { user } = isAuthenticated()
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const signin = (user) => {
        //  console.log(name , email, password);
        return fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err)
            })
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {

                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true

                        });
                    });
                    alert("Login Successfully completed")
                }
            });
    };
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showLoading = () => (
        loading && (<div className="alert alert-info"><h2>Loading...</h2></div>)
    );

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/discover" />;
        }

        if (isAuthenticated()) {
            return <Redirect to="/discover" />;
        }
    }



    return (
        <div>
            <Layout
                title="SignIn"
                description=" SignIn to Capital Movies"
                className="container col-md-8  offset-md-2"
            >
                {showError()}
                {showLoading()}
                {signUpForm()}
                {redirectUser()}
                {/* {JSON.stringify(values)} */}
            </Layout>
        </div>
    )
}

const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

export const signout = (next) => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem("jwt");
        next();
        return fetch(`${API}/signout`, {
            method: "GET",
        })
            .then(response => {
                console.log('signout', response);
            })
            .catch(err => console.log(err));
    }
};

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }

    if (sessionStorage.getItem("jwt")) {
        return JSON.parse(sessionStorage.getItem("jwt"));
    } else {
        return false;
    }
}

export default SignIn;