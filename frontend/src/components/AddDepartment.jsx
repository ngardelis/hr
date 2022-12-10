import React from 'react'

const AddDepartment = ({setOpen}) => {

    const addDepartmentHandler = () => {

    }

  return (
    <div className='quick-container'>
        <form className='formAdd' onSubmit={addDepartmentHandler}>
          <div className="card-quick">
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" required placeholder='Departments Name' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" className='department-input' required placeholder='Departments Head' />
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="number" className='department-input' min={0} required />
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

export default AddDepartment