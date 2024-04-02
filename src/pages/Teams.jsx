import React from 'react'
import Button from '../components/utilityComponents/Button'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    <div>
        <h1>Teams</h1>
        <Link to='/'><Button>Back to Home</Button></Link>
    </div>
  )
}

export default Teams
