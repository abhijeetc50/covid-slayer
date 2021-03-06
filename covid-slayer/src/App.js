import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Battlefield from './pages/battlefield';
import PageNotFound from './pages/404';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="mainHeader">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>Covid Slayer</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Router>
          <Switch>
            <Route exact path='/covid-slayer' component={Login} />
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/battlefield/:id' component={Battlefield} />

            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Covid Slayer 2020.</Footer>
    </Layout>

  );
}

export default App;
