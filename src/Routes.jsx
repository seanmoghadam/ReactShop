
import {Switch, Route} from "react-router-dom";
import React from "react";
import BookOverview from './components/BookOverview/BookOverview';
import Error from "./components/Error/Error";
import BookDetails from './components/BookDetails/BookDetails';

export default <Switch>
  <Route path="/" exact={true} render={(props => <BookOverview {...props}/>)}/>
  <Route path="/book/:id" exact={true} render={(props => <BookDetails {...props}/>)}/>
  <Route path="*" render={(props => <Error {...props}/>)}/>
</Switch>
