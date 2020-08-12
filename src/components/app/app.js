import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from "components/layout"
import HomeBlog from 'components/home-blog';
import ArticlePage from 'components/article-page';

import './app.css';

function App() {
  return (
    <div className="container">
      <Layout>
        <Switch>
          <Route exact path='/' component={HomeBlog}/>
          <Route path='/:id' component={ArticlePage}/>
          {/* <Route path='/admin' component={Schedule}/> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
