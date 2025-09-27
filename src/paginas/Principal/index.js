import React from 'react';
import firebase from "../../Firebase";
import { data } from 'react-router-dom';

class Principal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        nome: '',
        sobrenome: '',
        dataNascimento: ''
      }
    }

    async componentDidMount(){

        await firebase.auth().onAuthStateChanged(async (usuario) => {

            if(usuario){
                var uid = usuario.uid;

                await firebase.firestore().collection("usuario").doc(uid).get()
                .then( (retorno) => {
                    
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        dataNascimento: retorno.data().dataNascimento
                    });
                });
            }
        });
    }

    async handleLogout() {
        await firebase.auth().signOut();
        window.location.href = "/";
    }

    formatarData(dataISO) {
        if (!dataISO) return '';
        const [ano, mes, dia] = dataISO.split('-');
        return `${dia}/${mes}/${ano}`;
    }


    render(){
        return(
            <div>
                <h1>Página Principal</h1>
                Nome: {this.state.nome} <br />
                Sobrenome: {this.state.sobrenome} <br />
                Data de Nascimento: {this.formatarData(this.state.dataNascimento)} <br />
                <button onClick={this.handleLogout}>Sair</button>
            </div>
        )
    }
}

export default Principal;