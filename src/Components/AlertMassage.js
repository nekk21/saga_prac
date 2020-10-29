import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import styled from 'styled-components'

const AlertStyle = styled.div`
    margin: 20px auto;
    width: 290px;
`

export const AlertMassage = () => (
    <Container>
        <AlertStyle>
            <Alert variant="dark"> Нет результатов по звпросу! :( </Alert>
        </AlertStyle>
    </Container>
)
