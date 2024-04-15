describe('landing page', () => {
  beforeEach(() => {
 const key = process.env.REACT_APP_GOOGLE
 //Delete this empty fetch after fixing known issue
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=10&offset=0&lat=&lng=', {
    statusCode: 200,
    }).as('getEmptyBathrooms')
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=10&offset=0&lat=39.6702347&lng=-104.4714657', {
      statusCode: 200,
      fixture: 'bathrooms'
    }).as('getBathrooms')
    cy.intercept('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=44301%20EIliff%20trail%20Bennett%20CO&key=${key}`, {
      statusCode: 200,
      fixture: 'bennett'
    }).as('getBennett')
    cy.visit('http://localhost:3000/')
    // cy.wait('@getBennett')
    // cy.wait('@getBathrooms')
  })

  it('should show landing page ui', () => {
    cy.get('nav').contains('T4Tp')
    .get('nav').get('a').contains('About') 
    .get('main').get('h2').contains('Where do you want to')
    //Test length of inputs
    .get('form').children().should('have.length', '6')
    .get('form').get(`input[name='num']`)
    .get('form').get(`input[name='street']`)
    .get('form').get(`input[name='streetIdent']`)
    .get('form').get(`input[name='town']`)
    .get('form').get(`input[name='state']`)
    .get('main').get('img').should('have.attr', 'src').should('include', '/static/media/placeholder2')
    //Test click + navigate to About + URL
  })

  it('should type into the form and show list of locations', () => {
    //Test type into form
    //Test button click
    //Test first and last locations + contents
  })
  //Move into own describe block
  it('should navigate to the About page and show contents', () => {
    //Test click from landing page
    //Test URL
    //Test contents
    //Test any interactive elements
    //Test click back to home
    //Confirm home URL
  })

})