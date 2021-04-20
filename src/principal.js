import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/login.component';

function Principal() {

    return (
        <div className="Principal">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container">
                        <div className="nav-brand text-light">𝕋𝕎𝕀𝕋𝕋𝔼ℝ 𝟚.𝟘</div>
            
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Inicio de Sesion</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br></br>
                <div className="container">
                    <div className="text-light">𝕋𝕎𝕀𝕋𝕋𝔼ℝ 𝟚.𝟘</div>
        
                    <div className="text-light display-1">
                        <h1>BIENVENIDO A 𝕋𝕎𝕀𝕋𝕋𝔼ℝ 𝟚.𝟘 FAVOR DE INICIAR SESION</h1>
                        
                    </div>
                </div>

                <Switch>
                    <Route path="/sign-in" component={Login} />
                </Switch>
            </Router>
        </div>
  );
}

export default Principal;