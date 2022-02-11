import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link} from 'react-router-dom'


import { getTokenFromLocalStorage } from '../helpers/auth'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

const TeacherProfile = () => {

  // Global variables
  // const navigate = useNavigate()

  // State
  const [ teacher, setTeacher ] = useState([])
  const [ hasError, setHasError ] = useState({ error: false, message: '' })

  // Params
  const { teacherId } = useParams()

  useEffect(() => {
    const getSingleTeacher = async () => {
      try {
        const { data } = await axios.get(`/api/teachers/${teacherId}`, {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        setTeacher(data)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getSingleTeacher()
  }, [teacherId])

  // const userIsOwner = () => {
  //   const payload = getPayload()
  //   console.log(payload)
  //   if (!payload) return
  //   return teacher.owner === payload.sub
  // }


return (
<Container className="mt-4">
      {teacher ?
        <div className='teacher-show'>
          <h2>{teacher.firstName}</h2>
          <hr />
          <Row>
            <Col md="6">
              <img className='w-100' src={teacher.displayPicture} alt={teacher.firstName}/>
            </Col>
            <Col md="6">
              <h4>About me</h4>
              <p>{teacher.aboutMe}</p>
              <hr />
              <h4> Hello Everyone</h4>
              <hr />
              <p className="lead">{teacher.alsoSpeaks}</p>
              <h4>We Love to teach</h4>
              <hr />
              <p className="lead">{teacher.avgRating}</p>
              {/* { userIsOwner() &&
                <p>hello owner</p>
              } */}
              <Link to="/teachers" className="btn btn-warning">Back to all teachers</Link>
            </Col>
          </Row>
        </div>
        :
        <h2 className="text-center">
          {hasError.error ? 'Oh something went wrong, the sadness 😞' : 'Loading...'}
        </h2>
      }
    </Container>
  )
}


export default TeacherProfile