import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './User/SignUp';
import SignIn from './User/SignIn';
import PrivateRoute from './Auth/PrivateRoute';
import Dashboard from './User/UserDashboard';
import LatestMovies from './Core/LatestMovies';
import Popular from './Core/Popular';
import RedirectToOtherPage from './Core/RedirectToOtherPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/discover" exact component={Popular} />
                <Route path="/discover/latest" exact component={LatestMovies} />
                <Route path="/success" exact component={RedirectToOtherPage} />
                <Route path="/SignIn" exact component={SignIn} />
                <Route path="/SignUp" exact component={SignUp} />
                <PrivateRoute
                    path="/discover/favourite"
                    exact component={Dashboard}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;