import React from 'react'
import { FaCalendar, FaIdCard, FaUserAlt } from 'react-icons/fa';
import SalaryChart from '../components/SalaryChart';
import RevenueChart from '../components/RevenueChart';
import Projects from '../components/Projects';


const Dashboard = () => {
  return (
    <div className='d-container'>
      <div className="d-row">
        <h1 className="d-title">
          Welcome User
        </h1>
      </div>
      <div className="d-row">
        <div className="d-groups">
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaUserAlt />
              <span className='d-subtitle'>Users</span>
            </div>
          </div>
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaCalendar />
              <span className='d-subtitle'>Events</span>
            </div>
          </div>
          <div className="d-group">
            <div className="d-badge">0</div>
            <div className="d-content">
              <FaIdCard />
              <span className='d-subtitle'>Accounts</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-row">
        <div className="d-charts">
          <div className="d-chart">
            <SalaryChart />
          </div>
          <div className="d-chart">
            <RevenueChart />
          </div>
        </div>
        <div className="d-projects">
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default Dashboard