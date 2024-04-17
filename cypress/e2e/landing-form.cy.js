describe('landing page form', () => {
  beforeEach(() => {
 const key = process.env.REACT_APP_GOOGLE
 //Delete this empty fetch after fixing known issue
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=&lng=', {
    statusCode: 200,
    body: []
    }).as('getEmptyBathrooms')
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=39.6702347&lng=-104.4714657', {
      statusCode: 200,
      fixture: 'bathrooms'
    }).as('getBathrooms')
    cy.intercept('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=44301EIlifftrail%20Bennett%20CO&key=${key}`, {
      statusCode: 200,
      fixture: 'bennett'
    }).as('getBennett')
    cy.visit('http://localhost:3000/')
    // cy.wait('@getBennett')
    // cy.wait('@getBathrooms')
  })

  it('should type into the form and show list of locations', () => {
    //Test type into form
    cy.get('form')
    .get(`input[name='street']`).type('44301EIlifftrail').should('have.value', '44301EIlifftrail')
    .get(`input[name='town']`).type('Bennett').should('have.value', 'Bennett')
    .get(`input[name='state']`).type('CO').should('have.value', 'CO')
    .get('.Search_button').click()

    //Test that locations display after click
    cy.wait('@getBathrooms')
    .get('.Locations_div_wrapper').children().should('have.length', '30')
    .get('.Card_div_container').first().contains('Subway')
    .get('.Card_div_container').last().contains('insert name of location')
  })
  //Move into own describe block
  it('should navigate to the location details page and show contents when card is clicked', () => {
    //Test click from landing page
    //Test URL
    //Test contents
    //Test any interactive elements
    //Test click back to home
    //Confirm home URL
  })

})