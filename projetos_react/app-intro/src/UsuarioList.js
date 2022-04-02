import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 

const UsuarioList = (props) => (
    <div>
        <h4>Listagem de usuários</h4>
        <button onClick={props.onClickAtualizar} type="button">Atualizar Lista</button>
        <button type="button">Inserir</button>
        <table className="table">
            <thead>
                <tr> <th>Index</th><th>Nome</th><th>Email</th><th>Celular</th><th>Operações</th> </tr>
            </thead>
            <tbody>
                {props.usuarios.length > 0 ? (props.usuarios.map((o, index) => (
                    <tr key={index}>
                        <td>{index}</td> 
                        <td>{o.nome}</td> 
                        <td>{o.email}</td> 
                        <td>{o.celular}</td>
                        <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                ))) : (
                    <tr> <td colSpan={3}>Nenhum usuário.</td> </tr>
                )}
            </tbody>
        </table>
    </div>
)
export default UsuarioList;