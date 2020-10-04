import React from "react";
import {Route, Switch} from "react-router-dom";
import BookListing from "../App/Components/BookListing/BookListing";
import Error from "../App/Components/Error/Error";
import BookDetail from '../App/Components/BookDetail/BookDetail';

export default <Switch>
    <Route path="/" exact render={(props) => {
        return <BookListing {...props}/>
    }}/>}/>
    <Route path="/details/:id" exact render={(props) => {
        return <BookDetail/>
    }}/>}/>
    <Route path="*" render={(props) => <Error {...props}/>}/>
</Switch>
