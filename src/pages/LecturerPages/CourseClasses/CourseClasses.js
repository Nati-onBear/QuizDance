import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Table } from 'react-bootstrap'

import Header from '../../../components/Lecturer/Header/Header'

import { API } from '../../../services/api'

class CourseClasses extends Component {
  state = {
    classes: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    API.get('/classes.json')
      .then(res => { 
        this.setState({ classes: Object.values(res.data), loading: false })
      })
      .catch(err => {
        console.log(err)
        this.setState({ classes: [], loading: false })
      })
  }

  render() {
    const { classes, loading } = this.state

    return (
      <div>
        <Header />
        <div className='d-flex justify-content-between m-4'>
          <h3>Your Classes</h3>
          <Button variant='success'>Create New Class</Button>
        </div>
        {
          loading ? <h2>Loading... Pls wait...</h2> 
            : <Table hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course Name</th>
                  <th>Class Type</th>
                  <th>Room</th>
                  <th>Weekday</th>
                  <th>Start Period</th>
                  <th>End Period</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  classes && classes.map(aclass => (
                    <tr key={aclass.id}>
                      <td>{aclass.id}</td>
                      <td>{aclass.name}</td>
                      <td>{aclass.type}</td>
                      <td>{aclass.room}</td>
                      <td>{aclass.weekday}</td>
                      <td>{aclass.startPeriod}</td>
                      <td>{aclass.endPeriod}</td>
                      <td>{aclass.status ? 'Okay' : 'Not Okay'}</td>
                      <td className='d-flex justify-content-around'>
                        <Button variant='primary'>Details<FontAwesomeIcon icon='chart-bar' /></Button>
                        <Button variant='primary'>Sessions</Button>
                        <Button variant='primary'>Reports</Button>
                        <Button variant='danger'>Archive<FontAwesomeIcon icon='trash' /></Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
        }
      </div>
    )
  }
}

export default CourseClasses
