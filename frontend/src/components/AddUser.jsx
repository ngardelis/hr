import React from 'react'

const AddUser = ({setOpen}) => {

    const addUserHandler = () => {

    }

  return (
    <div className='quick-container'>
        <form className='formAdd' onSubmit={addUserHandler}>
          <div className="card-quick">
            <div className="card-flex">
                <div className="card-row">
                    <input type="text" required placeholder='User ID' />
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
                    <input type="text" required placeholder='Role' />
                </div>
                <div className="card-row">
                    <select name="" id="">
                        <option value="">Super Admin</option>
                        <option value="">Admin</option>
                        <option value="">HR Admin</option>
                        <option value="">Employee</option>
                    </select>
                </div>
            </div>
            <div className="card-flex">
                <div className="card-row">
                    <input type="password" required placeholder='Password' />
                </div>
                <div className="card-row">
                    <input type="password" required placeholder='Retype Password' />
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

export default AddUser