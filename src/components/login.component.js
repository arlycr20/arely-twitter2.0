import "./login.css";
import FacebookLogin from 'react-facebook-login';
//import { GoogleLogin } from 'react-google-login';

function Login() {

    const responseFacebook = (response) => {
        console.log(response);
        window.location='/twitter';
    }
    /* const responseGoogle = (response) => {
        console.log(response);
        window.location='/twitter';
      }*/

    return (
        <div className="login">
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Inicio de Sesion</h3>

                        <div className="form-group">
                            <label>Correo Electronico</label>
                            <input type="email" className="form-control" placeholder="Correo electronico" />
                        </div>

                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" placeholder="Contraseña" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Recordarme </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-info btn-block">INICIAR SESION</button>
                        <br></br>

                        <div className="text-center items-center">
                            <label>Inicia Sesion con Facebook</label>
                                <FacebookLogin
                                    appId="279386987263266"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    textButton="INICIAR CON FACEBOOK"
                                />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;