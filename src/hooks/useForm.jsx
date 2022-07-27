import React, {useState} from 'react'

const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onChangeInput = ({target}) =>{

        const {name, value} = target;
        setFormState({
            ...formState,[name]:value
        });
    }

    const mostrarObjeto = () =>{
        console.log(formState);
    }

    const onResetForm = () =>{
        setFormState(initialForm)
    }

    return (
        {
            ...formState, formState, onChangeInput, mostrarObjeto, onResetForm
        }
    )
}

export default useForm