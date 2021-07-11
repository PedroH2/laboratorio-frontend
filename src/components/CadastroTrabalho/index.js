import React, { Component } from 'react';
import './cadastroTrabalho.css'

const apiUrl = 'http://localhost:8080/api/v1/trabalho';
const stateInicial = {
    trabalhos : {
        cidade: 'Indaiatuba',
        colaboradorResponsavel: 'Pedro', 
        dentista: 'Teste', 
        paciente: 'Pedro Henrique', 
        dtEntrada: '11-07-2021', 
        dtEntregaDesejada : '11-07-2021', 
        trabalhoAExecutar: 'Teste',
        cor: 'Teste',
        metal: 'Teste',
        observacoes: 'Teste',
        situacaoTrabalho: 'ABERTO',
        valorTrabalho: 300,
        dtFinalizacao: '11-07-2021'
    }
}
export default class CadastroTrabalho extends Component{
    
    render(){
        return(
            <div className="inclui-container">
                <h1>Inclusão de trabalhos</h1>
                <form className="formTrabalho">

                    <label>Cidade:</label>
                    <input type = "text"
                    id="cidade"
                    placeholder="cidade do trabalho:"
                    className="form-input"/>

                    <label>colaboradorResponsavel:</label>
                    <input type = "text"
                    id="cidade"
                    placeholder="Colaborador responsável pelo trabalho:"
                    className="form-input"/>

                    <label>dentista:</label>
                    <input type = "text"
                    id="cidade"
                    placeholder="Dentista:"
                    className="form-input"/>

                    <label>paciente:</label>
                    <input type = "text"
                    id="paciente"
                    placeholder="Paciente:"
                    className="form-input"/>

                    <label>dtEntrada:</label>
                    <input type = "date"
                    id="dtEntrada"
                    className="form-input"/>

                    <label>dtEntregaDesejada:</label>
                    <input type = "date"
                    id="dtEntregaDesejada"
                    placeholder="Data de entrega desejada"
                    className="form-input"/>

                    <label>trabalhoAExecutar:</label>
                    <input type = "date"
                    id="dtEntregaDesejada"
                    placeholder="Data de entrega desejada"
                    className="form-input"/>

                    <label>cor:</label>
                    <input type = "text"
                    id="cor"
                    placeholder="Cor"
                    className="form-input"/>

                    <label>metal:</label>
                    <input type = "text"
                    id="metal"
                    placeholder="Metal"
                    className="form-input"/>

                    <label>observacoes:</label>
                    <input type = "text"
                    id="observacoes"
                    placeholder="Observacoes"
                    className="form-input"/>

                    <label>situacaoTrabalho:</label>
                    <input type = "text"
                    id="situacaoTrabalho"
                    placeholder="SituacaoTrabalho"
                    className="form-input"/>

                    <label>valorTrabalho:</label>
                    <input type = "number"
                    id="valorTrabalho"
                    placeholder="Valor do Trabalho"
                    className="form-input"/>

                    <label>dtFinalizacao:</label>
                    <input type = "date"
                    id="dtFinalizacao"
                    placeholder="Data de Finalização do trabalho"
                    className="form-input"/>

                    <button className="btnInserir">Inserir</button>

            </form>
            </div>
        )
    }
}