describe('Test Case 1', () => {
  it('passes', () => {
    cy.viewport(1500,800)
    cy.visit('https://staging.horizoncenter.co')
    cy.get('#email').type('abdul.salam@clarisync.com');
    cy.get('#password').type('United@123');
    cy.get('#btnLogin').click();
    cy.wait(1000); 
    cy.get('#quantum_projects > .hexagone-box-body > .ng-star-inserted').click({ force: true });
    cy.wait(10000);
    cy.xpath('//*[@id="pipeline"]', { timeout: 10000 }).click({ force: true });
    cy.get('#btnPipeLineCreateNew').click({ force: true });
    cy.get('#btnCreateCultivation').click({ force: true });
    cy.wait(1000);
    //cy.get('.side-nav-link-ref.ng-star-inserted.active#pipeline').should('have.class', 'active');
    cy.wait(1000);
    cy.get('#selectCultivationSite > .ng-select-container').find('.ng-dropdown-panel .ng-option').contains('Kyndryl : Greenford IRS (GBGRNFRD)').click();
      //cy.get('.ng-input input').type('SEARCH_QUERY');

  })
})