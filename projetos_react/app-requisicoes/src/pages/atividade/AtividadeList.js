import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const AtividadeList = (props) => {
 
  const atividadesBodyTemplate = (rowData) => {
    return (
      <div>
        <button
          onClick={() => props.editar(rowData._id)}
          className="btn btn-warning btn-sm"
        >
          Editar
        </button>
        <button
          onClick={() => props.excluir(rowData._id)}
          className="btn btn-danger btn-sm"
        >
          Excluir
        </button>

        <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Excluir" onClick={() => props.excluir(rowData._id)}/>
 
      </div>
    )
  }

 
 
  return (
    <div className="App">
      <h4>Listagem de Atividades</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable value={props.atividades} paginator responsiveLayout="scroll"  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}" rows={5} rowsPerPageOptions={[5,10,20,50]}
        selectionMode="single" selection={props.atividade} 
        onSelectionChange={e => props.setAtividade(e.value)} dataKey="_id"

      >
      
        <Column field="_id" header="ID" sortable filter></Column>
        <Column field="titulo" header="Título" sortable filter></Column>
        <Column field="descricao" header="Descrição" sortable filter></Column>
        <Column field="status" header="Status" sortable filter></Column>
        <Column field="prazo" header="Prazo de atendimento" sortable filter></Column>
        <Column field="agendaInicio" header="Agenda Inicio" sortable filter></Column>
        <Column field="dataHoraTermino" header="Data e Hora de Término" sortable filter></Column>
        <Column header="Operações" body={atividadesBodyTemplate}></Column>
      </DataTable>

      {/*<table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.atividades.length > 0 ? (
            props.atividades.map((o, index) => (
              <tr key={index}>
                <td>{o._id}</td>
                <td>{o.nome}</td>
                <td>{o.email}</td>
                <td>{o.senha}</td>
                <td>
                  <button
                    onClick={() => props.editar(o._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => props.excluir(o._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nenhum atividade!.</td>
            </tr>
          )}
        </tbody>
      </table> 
          */}
    </div>
  );
};
export default AtividadeList;
