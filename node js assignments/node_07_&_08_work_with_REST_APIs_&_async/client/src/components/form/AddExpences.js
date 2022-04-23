import React from 'react'

import './add_form.css'

function AddExpences(props) {

    const submitHandler = (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const amount = e.target.amount.value;

        if(title && amount ) {
            props.onExpenceAdd({title,amount})
        }

    }

    return (
        <div className='add-form-container'>
            <form onSubmit={submitHandler}>
                <label>Title</label>
                <input type="text" name='title'/>

                <label>Amount</label>
                <input type="number" name='amount'/>

                <button>Add Expences</button>
            </form>
            <button onClick={() => props.onCancelClick()}>cancel</button>
        </div>
    )
}

export default AddExpences