describe('template spec', () => {
  it('Displays error message if api calls fail', () => {
    //To see this replace 'v1' with 'v' in API calls or replace 'geocode' with 'eocode'
    //Currently not intercepting 404?
    cy.intercept('GET', 'https://maps.googleapis.com/maps/api/eocode/json?address=44301EIlifftrail%20Bennett%20CO&key=AIzaSyCA15iHfAYdYdZK6EAxCyjec85uausOa2E', {
      statusCode: 404,
    }).as('getCoordinates')
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v/restrooms/by_location?page=0&per_page=30&offset=0&lat=39.7588736&lng=-104.4274609', {
      statusCode: 404,
    }).as('getBathrooms')
      .visit('http://localhost:3000/')
      cy.get('form')
      .get(`input[name='Input_street']`).type('44301EIlifftrail').should('have.value', '44301EIlifftrail')
      .get(`input[name='Input_town']`).type('Bennett').should('have.value', 'Bennett')
      .get(`input[name='Input_state']`).type('CO').should('have.value', 'CO')
      
      .get('.Search_icon').click()
      cy.wait(3000)
      .get('.Search_icon').click()
      .url().should('include', '/*')
      .get('h2').contains('404') //use this for testing refugee restroom fetch
      .get('h2').contains('4xx') //use this for testing google fetch
      .get('.Error_img').should('have.attr', 'src').should('include', 'static/media/whoopsies')
})
})