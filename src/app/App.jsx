import React, {useState} from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("isLogged"));

  const changeLogStatus = () => {
    setIsLogged(!isLogged)
  }

  return (
    <div className="container" >
      <div className="row">
        <div className="col mainCol">
          <Header />
          <Main changeLogStatus={changeLogStatus}/>
          <Footer changeLogStatus={changeLogStatus} />
        </div>
      </div>
    </div>
  )
}

export default App;
