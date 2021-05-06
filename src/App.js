import './App.css';
import NavBar from './components/NavBar'
import { Container, Row, Col } from 'react-bootstrap'
import data from './countries.json'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'
import { Route } from 'react-router-dom'

// https://restcountries.eu/rest/v2/all
function App() {

  const [countries, updateCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        console.log(response)
        updateCountries(response.data)
      })
      .catch(() => {
        console.log('Error')
      })
  }, [])


if (!countries.length) {
  return <h1>Loading. . .</h1>
}

  return (

    <Container>
      <NavBar />
      <Row>
        <Col xs={6}>
          <h3>Country List</h3>
          <CountriesList countries={countries} />

        </Col>
        <Col xs={6}>
          <h3>Country detail</h3>
          <Route path="/country/:alpha3Code" component={CountryDetail} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
