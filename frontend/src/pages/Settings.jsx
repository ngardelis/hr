import React from 'react'

const Settings = () => {
  return (
    <div className='l-container'>
      <div className="l-row">
        <form>
          <div className="l-groups">
            <h2 className="l-title">Manager Settings</h2>
            <div className="l-group">
              <label htmlFor="ID">Id</label>
              <input type="text" id='ID' required spellCheck='false' />
            </div>
            <div className="l-group">
              <label htmlFor="o_pass">Old Password</label>
              <input type="password" id='o_pass' required />
            </div>
            <div className="l-group">
              <label htmlFor="n_pass">New Password</label>
              <input type="password" id='n_pass' required />
            </div>
            <div className="l-group">
              <label htmlFor="r_pass">Confirm New Password</label>
              <input type="password" id='r_pass' required />
            </div>
            <div className="l-group">
              <button className='l-btn'>Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Settings