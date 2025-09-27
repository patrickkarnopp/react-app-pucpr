import React from "react";
import { data, Link } from "react-router-dom";
import firebase from "../../Firebase";

class Cadastro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dataNascimento: ""
        }

        this.gravar = this.gravar.bind(this);
    }


    async gravar() {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then( async (retorno) => {

            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNascimento: this.state.dataNascimento
            });

        });

        await firebase.firestore().collection("usuario").add({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dataNascimento: this.state.dataNascimento
        });

        window.location.href = "/";
    }

        render() {
                return (
                        <div>
                                <h1>Página de Cadastro</h1>
                                <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
                                <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
                                <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
                                <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} /> <br />
                                <input type="date" placeholder="Data de Nascimento" onChange={(e) => this.setState({ dataNascimento: e.target.value })} /> <br />
                                <button onClick={this.gravar}>Gravar</button> <br />
                                <Link to="/">Voltar para Login</Link>
                        </div>
                )
        }
}




    
export default Cadastro;