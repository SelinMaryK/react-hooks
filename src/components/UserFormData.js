import React from 'react'
import useInputField from './customHooks/useInputField';

function UserFormData() {
    const [firstName, bindFirstName, resetFirstName] = useInputField('');
    const [lastName, bindLastName, resetLastName] = useInputField('');
    const submitHandler = (event) =>{
        event.preventDefault();
        alert(`${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name: </label>
                    <input type='text' {...bindFirstName}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' {...bindLastName}/>
                </div>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default UserFormData
