import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'

const LoaderStyle = styled.div`
    .only {
        margin-top: 100px;
        display: flex;
        justify-content: center;
    }
    .role {
        width: 3rem;
        height: 3rem;
    }
`

function Loader() {
    return (
        <>
            <LoaderStyle>
                <div className="only">
                    <Spinner animation="border" role="status" className="role">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </LoaderStyle>
        </>
    )
}

export default Loader
