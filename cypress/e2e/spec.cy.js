describe('Test Case 1', () => {
  it('passes', () => {
    cy.viewport(1500,800)
    cy.visit('https://app.sibme.com/home/login')
    cy.get('#email').type('Zunair@gmail.com');
    cy.get('#password').type('United@123');
    cy.get('#btnLogin').click();
    cy.wait(1000); 
    cy.get('#projects > .hexagone-box-body > .ng-star-inserted').click({ force: true });
    cy.wait(10000);
    cy.xpath('//*[@id="btn"]', { timeout: 10000 }).click({ force: true });
    cy.get('#btnCreateNew').click({ force: true });
    cy.get('#btnCreate').click({ force: true });
    cy.wait(1000);
    cy.get('.side-nav-link-ref.ng-star-inserted.active#pipeline').should('have.class', 'active');
    cy.wait(1000);
    cy.get('#selectSite > .ng-select-container').find('.ng-dropdown-panel .ng-option').contains('IRS').click();
    cy.get('.ng-input input').type('SEARCH_QUERY');

  })
})