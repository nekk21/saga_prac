import React from 'react'
import { connect, useSelector } from 'react-redux'

import FormInput from './FormInput'
import { AlertMassage } from './AlertMassage'
import Loader from './Loader'
import CardsMovies from './CardsMovies'

function Movies() {
    const loading = useSelector(state => state.app.loader)
    const alert = useSelector(state => state.app.alert)

    if (alert === true) {
        return (
            <>
                <FormInput />
                <AlertMassage />
            </>
        )
    }

    if (loading) {
        return (
            <>
                <FormInput />
                <Loader />
            </>
        )
    }
    return (
        <>
            <FormInput />
            <CardsMovies />
        </>
    )
}

const mapStateToProps = state => ({
    alert: state.app.alert,
})

export default connect(mapStateToProps)(Movies)
