describe('landing page', () => {
  beforeEach(() => {
 const key = process.env.REACT_APP_GOOGLE
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=10&offset=0&lat=39.6702347&lng=-104.4714657', {
      statusCode: 200,
      fixture: 'bathrooms'
    }).as('getBathrooms')
    cy.intercept('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=44301%20EIliff%20trail%20Bennett%20CO&key=${key}`, {
      statusCode: 200,
      fixture: 'bennett'
    }).as('getBennett')
    cy.visit('https://localhost:3000/')
    // cy.wait('@getBennett')
    // cy.wait('@getBathrooms')
  })
  it('should show landing page ui', () => {
    // cy.visit('https://localhost:3000/')
  })
})