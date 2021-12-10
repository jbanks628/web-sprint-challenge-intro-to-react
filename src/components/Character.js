// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Style = styled.h1`
font-family: 'Sigmar One', cursive;
font-size: 3rem;
color: #f28f3b;
background-color: #001845;
width: 70%;
border-radius: 20px;
`

export default function Character(props) {

return (
<div>
    <Style>{props.name}</Style>
</div>
)
}