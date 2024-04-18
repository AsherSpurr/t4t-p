describe('landing page', () => {
  beforeEach(() => {
    //Bennett
// 39.6702347
//-104.4714657
    cy.intercept('GET', 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=0&per_page=10&offset=0&lat=39.6702347&lng=-104.4714657', {
      statusCode: 201,
      body: {
        
      }
    })
  })
  it('should show landing page ui', () => {
    cy.visit('https://example.cypress.io')
  })
})