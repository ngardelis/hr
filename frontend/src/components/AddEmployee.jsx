import React from 'react'

const AddEmployee = ({setOpen}) => {

    const addEmployeeHandler = () => {

    }

  return (
    <div className='quick-container'>
        <form className='formAdd' onSubmit={addEmployeeHandler}>
          <div className="card-quick">
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" required placeholder='Employee ID' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" required placeholder='First Name' />
                </div>
                <div className="card-row">
                    <input type="text" required placeholder='Last Name' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" required placeholder='E-mail' />
                </div>
                <div className="card-row">
                    <input type="text" required placeholder='Mobile' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" className='department-input' required placeholder='Role' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <button className='add'>Add</button>
                </div>
            </div>
          </div>
          <button className='back' onClick={() => setOpen(false)}>Close</button>
        </form>
    </div>
  )
}

export default AddEmployee