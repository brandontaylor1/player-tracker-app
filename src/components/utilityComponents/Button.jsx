import React from 'react'
import styled from 'styled-components'

const Button = ({children}) => {
    const styles = {
        border: 'none',
        borderRadius: '10px',
        backgroundColor: 'black',
        color: "white",
        margin: '0 1rem',
        cursor: 'pointer',
        width: '20vw',
        height: '5vh'
    }

  return (
    <button style={styles}>{children}</button>
  )
}

export default Button
