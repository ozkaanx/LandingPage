import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (  
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
