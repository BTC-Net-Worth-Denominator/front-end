import React from 'react';
import Asset from './Asset'

const Portfolio = () => {

    return(
        <div>
            <section>
                <h3>Remove Asset</h3>
                <h1>View Portfolio</h1>
                <h1>⟳</h1>
            </section>
            <section>
                <Asset />
            </section>
            <section>
                <img></img>
                <h2>Total Net Worth</h2>
                <h2>6.55 BTC</h2>
            </section>
        </div>
    )
}

export default Portfolio