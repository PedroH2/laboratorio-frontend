import React, {Component} from 'react';
import './index.css';

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
export default class ListarTrabalhos extends Component{

    render(){
        return(
            <div className="listagem">
            <h1 className="tituloListagem">Listagem de Trabalhos</h1>
                <table className="listaAlunos" id="tbListaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Ra</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Curso</th>
                        </tr>
                    </thead>
                </table>
        </div> 
        )
    }
}