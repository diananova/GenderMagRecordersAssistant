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

const getGM = () => {
  return getIframeBody("GenderMagFrame")
}

	it('does prewalkthrough', () => {
    // open the slider and click the start button
    getIframeBody("slideout").click()
		getGM().find('#startGenderMagButton').should('exist')
    getGM().find('#startGenderMagButton').click()
    getGM().find('#sideBySide').should('exist')

    // enter team name
    getGM().find('#teamInput').type('RYS')
    getGM().find('#submitTeam').click()
    // select Abi
    getGM().find('#submitPersona').click()
    // enter she/her pronouns
    getGM().find('#pronounInput').type('she')
    getGM().find('#possessiveInput').type('her')
    getGM().find('#submitPronoun').click()
    // enter the scenario
    getGM().find('#scenarioInput').type('scenario')
    getGM().find('#submitScenario').click()
  })

})