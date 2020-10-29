import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CardsStyle = styled.div`
    .each {
        
        margin: 25px;
    }

    .wrapper {
        position: relative;
        top: 26%;
        padding: 127px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    p {
        
        display: block;
        max-width: 230px;
        max-height: 300px;
        font-family: cursive;
        font-size: 15px;
        padding: 1px;
    }
    img {
        border: 1px solid transparent;

        &:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
            border-radius: 1px;s
            border-color: grey;
            transition: 1s;
            transform: scale(1.03);
        }
    }
`

function CardsMovies() {
    const moviesInState = useSelector(state => state.items.movies)

    return (
        <CardsStyle>
            <div className="wrapper">
                {moviesInState.map(film => (
                    <div className="each" key={film.id}>
                        <a
                            href={film.show.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={film.show.image?.medium}
                                alt="must be here"
                            ></img>
                        </a>

                        <p>
                            <strong>Name:</strong>
                            {film.show.name} <br />
                            <strong>Language:</strong> {film.show.language}
                            <br />
                            <strong>Premiered:</strong>
                            {film.show.premiered}
                            <br />
                            <strong>Status:</strong> {film.show.status}
                            <br />
                            <strong>Geners:</strong>
                            {film.show.genres.toString()}
                        </p>
                    </div>
                ))}
            </div>
        </CardsStyle>
    )
}

export default CardsMovies
