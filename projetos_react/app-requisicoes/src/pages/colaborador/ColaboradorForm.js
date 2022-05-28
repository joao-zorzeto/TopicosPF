import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

const ColaboradorForm = (props) => {
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setColaborador({ ...props.colaborador, [id]: value });
  };

  const [senha, setSenha] = useState();
  const [contraSenha, setContraSenha] = useState();

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha. 
    console.log("S: "+senha+" CS: "+contraSenha);
    if(senha !== contraSenha){
      setError('senha', { type: 'custom', message: 'Senha e contra senha diferentes.' });
    } else if (senha.length < 8){
      setError('senha', { type: 'custom', message: 'A senha deve ter pelo menos 8 caracteres.' });
    } else {
      props.colaborador.senha = senha;
      props.salvar(); 
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Colaboradores</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="nome">Nome</label>
              <InputText id="nome" defaultValue={props.colaborador.nome}
                {...register("nome", { 
                  required: {value:true, message:"O nome é obrigatório."}, 
                  minLength: {value:2, message:"O nome deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O nome deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.nome && <span style={{color:'red'}}>{errors.nome.message}</span>}  
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="email">Email</label>
              <InputText id="email" defaultValue={props.colaborador.email}
              {...register("email", { 
                required: {value:true, message:"O email é obrigatório."}, 
                minLength: {value:10, message:"O email deve ter pelo menos 10 caracteres."}, 
                maxLength: {value:100, message:"O email deve ter no máximo 100 caracteres."} 
              })}   
                onChange={handleInputChange} />
              {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}    
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="senha">Senha</label>
              <Password id="senha" 
                {...register("senha", { 
                })}     
                defaultValue={senha} 
                onChange={e => setSenha(e.target.value)} />
               {errors.senha && <span style={{color:'red'}}>{errors.senha.message}</span>}   
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="contraSenha">Contra Senha</label>
              <Password id="contraSenha" defaultValue={contraSenha}
                onChange={e => setContraSenha(e.target.value)} toggleMask />
            </div>



          </div>
        </div>
      </div>

      <div>
        <Button label="Salvar" icon="pi pi-save" type="submit"  
                className="p-button-secondary p-button-text" />
        <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar} 
                className="p-button-secondary p-button-text" />
      </div>

    </form>
  );
};
export default ColaboradorForm;
