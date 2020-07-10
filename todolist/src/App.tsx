import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage';
import ToDoPage from './pages/ToDoPage/ToDoPage';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/toDoPage" component={ToDoPage} />
                <Route exact path="/adminPage" component={AdminPage} />
                <Route exact path="*" component={() => (<Redirect to="/" />)} />
            </Switch>
        </BrowserRouter>
  );
}

export default App;