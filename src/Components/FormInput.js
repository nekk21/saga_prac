import React, { useState } from 'react'
import { Form, Col, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { sendRequest } from '../redux/actions/actions'

const FormStyle = styled.div`
    form {
        width: 500px;
        margin: auto;
        display: flex;
        justify-content: center;
    }

    input: focus {
        border-color: grey;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    }

    button {
        cursor: pointer;
        font: small;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }
`

function FormInput() {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const submit = event => {
        event.preventDefault()
        if (value !== '') {
            dispatch(
                sendRequest(`http://api.tvmaze.com/search/shows/?q=${value}`)
            )
        }
    }

    const change = e => {
        setValue(e.target.value)
    }

    return (
        <Container>
            <FormStyle>
                <Form className="mt-4" onSubmit={submit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Group>
                                <Form.Control
                                    id="form-name"
                                    type="text"
                                    value={value}
                                    onChange={change}
                                    placeholder="Enter movie name..."
                                />
                            </Form.Group>
                        </Col>
                        <Col xs="auto">
                            <Button
                                type="submit"
                                className="mb-3"
                                variant="dark"
                            >
                                search
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </FormStyle>
        </Container>
    )
}

export default FormInput
