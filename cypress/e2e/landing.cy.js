describe('landing page', () => {
  beforeEach(() => {
 const key = process.env.REACT_APP_GOOGLE
 //Delete this empty fetch after fixing known issue
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=30&offset=0&lat=&lng=', {
    statusCode: 200,
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

  it('should show landing page ui', () => {
    cy.get('nav').contains('T4Tp')
    .get('nav').get('a').contains('About') 
    .get('nav').get('img').should('have.attr', 'src').should('include', '/static/media/distance-blue')
    .get('main').get('h2').contains('Where do you want to')
    //Test length of inputs
    // .get('form').children().should('have.length', '4')
    // .get('form').get('.Search_button').get('.Search_icon').should('have.attr', 'src').should('include', '/static/media/search')
    // .get('form').get(`input[name='street']`)
    // .get('form').get(`input[name='town']`)
    // .get('form').get(`input[name='state']`)
    // .get('form').get('.Search_button')
    //Test click + navigate to About + URL
    .get('.Filter_div_wrapper').children().should('have.length', '3')
    .get('.Filter_button').first().should('have.id', 'accessible')
    // .get('.Filter_button').last().should('have.id', 'all')
    .get('.Map_div_wrapper').get('.Map_img').should('have.attr', 'src').should('include', '/static/media/placeholder-gray2')
  })

  // it('should type into the form and show list of locations', () => {
  //   //Test type into form
  //   cy.get('form')
  //   .get(`input[name='street']`).type('44301EIlifftrail').should('have.value', '44301EIlifftrail')
  //   .get(`input[name='town']`).type('Bennett').should('have.value', 'Bennett')
  //   .get(`input[name='state']`).type('CO').should('have.value', 'CO')
  //   .get('.Search_button').click()

  //   //Test that locations display after click
  //   cy.wait('@getBathrooms')
  //   .get('.Locations_div_wrapper').children().should('have.length', '30')
  //   .get('.Card_div_container').first().contains('Subway')
  //   .get('.Card_div_container').last().contains('insert name of location')
  // })
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