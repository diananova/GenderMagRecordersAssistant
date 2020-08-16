// Run the prewalkthrough
// The idea is that these actions are usually repeated before every debugging session

context('Pre-walkthrough', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

// Helper functions for dealing with iframes
// See more at https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/

const getIframeDocument = (name) => {
  return cy.get('iframe[id="' + name + '"]')
  // Cypress yields jQuery element, which has the real
  // DOM element under property "0".
  // From the real DOM iframe element we can get
  // the "document" element, it is stored in "contentDocument" property
  // Cypress "its" command can access deep properties using dot notation
  // https://on.cypress.io/its
  .its('0.contentDocument').should('exist')
}

const getIframeBody = (name) => {
  // get the document
  return getIframeDocument(name)
  // automatically retries until body is loaded
  .its('body').should('not.be.undefined')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  .then(cy.wrap)
}

	it('clicks popup', () =>{
		getIframeBody("slideout").click()
		getIframeBody("GenderMagFrame").find('button#startGenderMagButton').should('exist')
	})

	// TODO: go through the rest of the pre-walkthrough

})