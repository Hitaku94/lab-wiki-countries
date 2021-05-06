import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CountriesList extends Component {

    render(){

        const { countries } = this.props

        return (
            <div>
                {
                    countries.map((country, i) => {
                        return (
                        <div key={i}>
                            <Link to={`/country/${country.alpha3Code}`}>{country.name}</Link>
                        </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default CountriesList