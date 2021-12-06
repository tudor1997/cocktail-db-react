import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <section className="section section-error">
            <h3>Oops, wrong route...</h3>

            <Link className="link-error" to="/">Back Home</Link>
        </section>
    )
}

export default Error
