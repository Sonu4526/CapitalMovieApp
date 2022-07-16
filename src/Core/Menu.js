import React, { Fragment } from 'react';
import { signout, isAuthenticated } from '../User/SignIn';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#F14141", fontWeight: 'bold' };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => {
    return (
        <div>
            <ul className="nav nav-tabs" style={{
                backgroundImage: "linear-gradient(90deg, rgb(31, 112, 193), rgb(0, 0, 0))",
            }}>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, '/discover')}
                        to="/discover">

                        Popular
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, '/discover/latest')}
                        to="/discover/latest">

                        Latest
                    </Link>
                </li>
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, '/discover/favourite')}
                            to="/discover/favourite">

                            Favourites
                        </Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, '/SignIn')}
                                to="/SignIn">

                                SignIn

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, '/SignUp')}
                                to="/SignUp">

                                SignUp

                            </Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: 'pointer', color: '#ffffff' }}
                            onClick={() => signout(() => {
                                history.push("/discover");
                            })}
                        >

                            Signout
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default withRouter(Menu);