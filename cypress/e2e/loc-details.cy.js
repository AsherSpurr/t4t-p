describe('location details page', () => {
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
  })

  it('should navigate to the location details page and show contents of the clicked card', () => {
    //Test click from landing page
    //Test URL
    //Test contents
    //Test any interactive elements
    //Test click back to home
    //Confirm home URL
    // Set up
    cy.get(`input[name='street']`).type('44301EIlifftrail').should('have.value', '44301EIlifftrail')
    .get(`input[name='town']`).type('Bennett').should('have.value', 'Bennett')
    .get(`input[name='state']`).type('CO').should('have.value', 'CO')
    .get('.Search_button').click()

    //Test first card
    .get('.Card_div_container').first().click()
    .get('h2').contains('965 S 1st St #200')
    .get('.LocDetails_img_container')
    //Maybe test how much space it takes up
    .get('.LocDetails_heading_container').within(() => {
      cy.get('.LocDetails_h3').contains('Bennett | Colorado')
      .get('.LocDetails_icons_container').get('#LocDetails_icon_upvote').should('have.attr', 'src').should('include', '/static/media/thumbs-up')
    })
    .get('.LocDetails_icons_container').last().within(() => {
      cy.get('.LocDetails_p').first().contains('5.42')
      .get('.LocDetails_p').last().contains('Accessible')
    })
    .get('.LocDetails_moreInfo_wrapper').contains('Directions')
    .get('.LocDetails_moreInfo_wrapper').contains('Comment')
  })
})