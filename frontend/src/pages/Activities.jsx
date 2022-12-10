import React from 'react'

const Activities = () => {
  return (
    <div className='a-container'>
      <div className="a-row">
        <h3 className="u-title">TIMELINE ACTIVITY</h3>
      </div>
      <div className="a-row">
        <form className='form'>
          <div className="form-group">
            <input type="text" placeholder='Title' />
          </div>
          <div className="form-group">
            <textarea name="" id="" cols="100" rows="20" placeholder='Message'></textarea>
          </div>
          <div className="form-group">
            <button className='p-btn'>Post</button>
          </div>
        </form>
      </div>
      <div className="a-row">
        <h3 className="u-title">POSTS</h3>
      </div>
      <div className="a-row">
        <div className="a-posts">
          <div className="a-post">
            <div className="a-postHead">
              <h3 className="a-postTitle">Title One</h3>
              <p className="a-postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente.
              Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.</p>
            </div>
            <div className="a-postBody">
              <span>Tony Hawk - HR Admin </span>
              <span>24.11.2022</span>
            </div>
          </div>
          <div className="a-post">
            <div className="a-postHead">
              <h3 className="a-postTitle">Title One</h3>
              <p className="a-postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente.
              Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.</p>
            </div>
            <div className="a-postBody">
              <span>Tony Hawk - HR Admin </span>
              <span>24.11.2022</span>
            </div>
          </div>
          <div className="a-post">
            <div className="a-postHead">
              <h3 className="a-postTitle">Title One</h3>
              <p className="a-postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente.
              Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.</p>
            </div>
            <div className="a-postBody">
              <span>Tony Hawk - HR Admin </span>
              <span>24.11.2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities