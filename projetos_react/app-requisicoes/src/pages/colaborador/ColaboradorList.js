import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const ColaboradorList = (props) => {
 
  const operacoesBodyTemplate = (rowData) => {
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
      <h4>Listagem de Colaboradores</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable value={props.colaboradores} paginator responsiveLayout="scroll"  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}" rows={5} rowsPerPageOptions={[5,10,20,50]}
        selectionMode="single" selection={props.colaborador} 
        onSelectionChange={e => props.setColaborador(e.value)} dataKey="_id"

      >
      
        <Column field="_id" header="ID" sortable filter></Column>
        <Column field="nome" header="Nome" sortable filter></Column>
        <Column field="email" header="Email" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}></Column>
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
          {props.colaboradores.length > 0 ? (
            props.colaboradores.map((o, index) => (
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
              <td colSpan={3}>Nenhum colaborador!.</td>
            </tr>
          )}
        </tbody>
      </table> 
          */}
    </div>
  );
};
export default ColaboradorList;
