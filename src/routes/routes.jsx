import React from "react";
import {Route, Switch} from "react-router-dom";
import BookListing from "../App/Components/BookListing/BookListing";
import Error from "../App/Components/Error/Error";

export default <Switch>
    <Route path="/" render={(props) => {
        return <BookListing {...props}/>
    }}/>}/>
    <Route path="*" render={(props) => <Error {...props}/>}/>
</Switch>
