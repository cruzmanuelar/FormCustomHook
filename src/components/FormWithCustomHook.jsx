import React, {useState} from 'react';
import useForm from '../hooks/useForm';
import App from '../App.css';

const FormWithCustomHook = () => {

    const {formState, onChangeInput, nombre, email, password, mostrarObjeto, onResetForm} = useForm({
        nombre:'',
        email:'',
        password:''
    });
    
    return (
        <div className='container-fluid main'>
            <div className='row py-4'>
                <div className="col"></div>
                <div className="col">
                    <h4 className='text-center'>Formulario con Custom Hook</h4>
                    <div>
                        <label className='form-label'>Nombre:</label>
                        <input
                            className='form-control'
                            name='nombre'
                            value={nombre}
                            onChange={onChangeInput}
                            autoComplete='off'
                        />
                        <br/>
                        <label className='form-label'>Email:</label>
                        <input
                            className='form-control'
                            name='email'
                            value={email}
                            onChange={onChangeInput}
                            autoComplete='off'
                        />
                        <br/>
                        <label className='form-label'>Password:</label>
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            value={password}
                            onChange={onChangeInput}
                            autoComplete='off'
                        />
                    </div>
                    
                    <div className='d-grid gap-2 my-2'>
                        <button 
                            className='btn btn-primary'
                            onClick={mostrarObjeto}>
                            Mostrar
                        </button>
                        <button 
                        className='btn btn-success'
                        onClick={onResetForm}>Limpiar</button>
                    </div>
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default FormWithCustomHook