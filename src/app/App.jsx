import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("isLogged"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const changeLogStatus = () => {
    setIsLogged(!isLogged)
  }

  const changeUserName = (name) => {
    setUserName(name)
  }

  return (
    <div className="container" >
      <div className="row">
        <div className="col mainCol">
          <Header userName={userName} />
          <Main changeLogStatus={changeLogStatus} changeUserName={changeUserName} />
          <Footer changeLogStatus={changeLogStatus} />
        </div>
      </div>
    </div>
  )
}

export default App;
