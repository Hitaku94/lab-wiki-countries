import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CountryDetail extends Component {

    state = {
        CountryDetail: {}
    }

    getData = () => {
        let countryCode = String(this.props.match.params.alpha3Code)
        https://restcountries.eu/rest/v2/all
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            .then((response) => {
                
                const {capital, area, borders} = response.data
                let detail = {
                    capital: capital,
                    area: area,
                    borders: borders,
                    code: String(this.props.match.params.alpha3Code)
                }
                this.setState({
                    CountryDetail: detail
                })
            })
            .catch(() => {
                console.log('Error')
            })
    }

    componentDidMount(){
        this.getData()
    }


    componentDidUpdate(){
        console.log('does it work ')
        let stateId = this.state.CountryDetail.alpha3Code
        let propsId = String(this.props.match.params.alpha3Code)
        if (stateId !== propsId) {
            this.getData()
        }
    }

    render(){
        
        const {CountryDetail} = this.state
        console.log(CountryDetail)
        console.log(CountryDetail.borders)
        if (!CountryDetail) {
            return <h1>sorry for the wait</h1>
        }
       

        return(
            <div>
              <h1>{CountryDetail.name}</h1> 
              <div>
                  <p>{CountryDetail.capital}</p>
              </div>
              <div>
                  <p>{CountryDetail.area}</p>
              </div>
              <div>
                          <ul>
                              <li><Link to={`/country`}>{CountryDetail.borders}</Link></li>
                          </ul>
              </div>
            </div>
        )
    }
}

export default CountryDetail