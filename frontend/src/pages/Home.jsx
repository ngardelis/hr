import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Top from '../components/Top'
import Accounts from './Accounts';
import Activities from './Activities';
import Dashboard from './Dashboard';
import Department from './Department';
import Employee from './Employee';
import Events from './Events';
import Users from './Users';
import Settings from './Settings'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <Sidebar />
            </div>
            <div className="row">
                <div className="col">
                    <Top />
                </div>
                <div className="col">
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/department' element={<Department />} />
                        <Route path='/employee' element={<Employee />} />
                        <Route path='/activities' element={<Activities />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/accounts' element={<Accounts />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home