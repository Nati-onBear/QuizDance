import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap'
import Header from '../../../components/Lecturer/Header/Header'

const classData = [
  {
    id: 27,
    name: 'Software Project Management',
    type: 'Laboratory',
    room: 'A1.606',
    weekday: 'Monday',
    startPeriod: 7,
    endPeriod: 10,
    status: true
  },
  {
    id: 45,
    name: 'Entrepreneurship',
    type: 'Theory',
    room: 'L.202',
    weekday: 'Wednesday',
    startPeriod: 4,
    endPeriod: 6,
    status: false
  }
]

class CourseClasses extends Component {
  state = {
    classes: []
  }

  componentDidMount() {
    this.setState({ classes: classData })
  }

  render() {
    const { classes } = this.state
    return (
      <div>
        <Header />
        <div className='d-flex justify-content-between m-4'>
          <h3>Your Classes</h3>
          <Button variant='success'>Create New Class</Button>
        </div>
        <Table hover>
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
                <tr>
                  <td>{aclass.id}</td>
                  <td>{aclass.name}</td>
                  <td>{aclass.type}</td>
                  <td>{aclass.room}</td>
                  <td>{aclass.weekday}</td>
                  <td>{aclass.startPeriod}</td>
                  <td>{aclass.endPeriod}</td>
                  <td>{aclass.status ? 'Okay' : 'Not Okay'}</td>
                  <td className='d-flex justify-content-around'>
                    <Button variant='primary'><FontAwesomeIcon icon='chart-bar' /></Button>
                    <Button variant='danger'><FontAwesomeIcon icon='trash' /></Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default CourseClasses
