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
    cy.intercept('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=44301EIlifftrail%20Bennett%20CO&key=AIzaSyCA15iHfAYdYdZK6EAxCyjec85uausOa2E`, {
      statusCode: 200,
      fixture: 'bennett'
    }).as('getBennett')
    cy.visit('http://localhost:3000/')
  })

  it('should type into the form and show list of locations', () => {
    //Test type into form and form submit
    cy.get('form')
    .get(`input[name='Input_street']`).type('44301EIlifftrail').should('have.value', '44301EIlifftrail')
    .get(`input[name='Input_town']`).type('Bennett').should('have.value', 'Bennett')
    .get(`input[name='Input_state']`).type('CO').should('have.value', 'CO')
    
    //ToDo: Uh oh! What I feared is true, it takes two clicks to fetch
    .get('.Search_icon').click()
    cy.wait(3000)
    .get('.Search_icon').click()

    //Test that list of locations display after click
    cy.wait(10000) //Bathroom API takes a while to load
    .get('.Locations_div_wrapper').children().should('have.length', '10')
    .get('.Card_div_container').first().contains('h3', 'Subway')
    .get('.Card_contents_container').first().within(() => {
      cy.get('img').first().should('have.attr', 'src').should('include','/static/media/distance-dark-purple')
      .get('#Card_icon_unisex').should('have.attr', 'src').should('include','/static/media/false')
      .get('#card_icon_accessible').last().should('have.attr', 'src').should('include','/static/media/true')
    })
    .get('.Card_div_container').last().contains('h3','Denver International Airport')
    .get('.Card_div_container').last().within(() => {
      cy.get('img').first().should('have.attr', 'src').should('include','/static/media/distance-dark-purple')
      .get('#Card_icon_unisex').should('have.attr', 'src').should('include','/static/media/true')
     .get('#card_icon_accessible').last().should('have.attr', 'src').should('include','/static/media/true')
    })
  })

})