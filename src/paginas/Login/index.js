import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "../../Firebase";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            erro:""
        }
        this.acessar = this.acessar.bind(this);
    }

    async acessar(){

        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then( (retorno) => {
            window.location.href = "/principal";
        })
        .catch( (erro) => {
            this.setState({
                erro: "Usuário ou senha incorretos.",
                senha: ""
            });
        });
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                {this.state.erro && (
                    <div style={{ color: "red" }}>{this.state.erro}</div>
                )}
                <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
                <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} value={this.state.senha} /> <br />
                <button onClick={this.acessar}>Acessar</button> <br />
                <Link to="/cadastro">Ainda não sou cadastrado</Link>
            </div>
        )
    }
}

export default Login;