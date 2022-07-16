import React from 'react';
import Layout from '../Core/Layout';
import { isAuthenticated } from '../User/SignIn';
import FavouriteCollection from '../Core/FavouriteCollection';

const UserDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();


    const userLinks = () => {
        return (
            <div className="card">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{"Registered User"}</li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Your Favourite Collections"
            description="Millions of movies, TV shows and people to discover. Explore now."
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    <FavouriteCollection />
                </div>
            </div>
        </Layout>
    )
}

export default UserDashboard;