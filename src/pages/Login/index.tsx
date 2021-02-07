import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Facebook from '../../assets/images/icons/facebook.svg';
import Google from '../../assets/images/icons/google.svg';
import { Dispatch } from 'redux';
import { IActionType } from '../../types/generic';
import { authActions } from '../../store/actions/authentication';

interface Props {
    isAuthenticated: boolean | null;
    authenticate: (user: {password: string; email: string;}) => void;
}

const Login:React.FC<Props> = props => {

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    })

    const handleChange = (name: string) => (event: any) => {
        setValues({...values, [name]: event.target.value});
    }

    const onSubmit = (event: any) => {
        event.preventDefault()
        // console.log(values);
        props.authenticate(values);
    }

    if(props.isAuthenticated){
        <Redirect 
            to={{pathname: "/", }}
      />
    }

    console.log("Props: ", props);

    return (
        <div className="container">
        <div className="inner">
            <a href='#'>
                <img src={Facebook} alt='facebook login' /> <span>Facebook Login</span>
            </a>
            <a href='#'>
                <img src={Google} alt='google login' /> <span>Google Login</span>
            </a>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="email" placeholder="Email" value={values.email} onChange={handleChange("email")} required/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" value={values.password} onChange={handleChange("password")} required/>
                </div>
                <div className="form-group">
                    <button className="btn-login" type="submit">Log in</button>
                </div>
                <div className="form-group">
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>
            </form>
        </div>            
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<IActionType>) => {
    return {
        authenticate: (user: any) => dispatch(authActions.authenticate(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);