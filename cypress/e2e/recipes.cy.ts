describe('Recipes Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should display recipes on the index page with prefetch', () => {
    cy.getRecipts().first()
  })
})

describe('Recipes Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should update URL with search parameter when searching', () => {
    cy.getSearchInput()
      .should('be.visible')
      .type('test')
      .should('have.value', 'test')
    cy.url().should('include', 'search=test')
  })

  it('should clear search parameter from URL when search is clearedl', () => {
    cy.getSearchInput().type('test')
    cy.url().should('include', 'search=test')
    cy.getSearchInput().clear()
    cy.url().should('not.include', 'search=test')
  })

  it('should show no recipes when search does not match', () => {
    cy.getSearchInput().type('test321124')
    cy.getRecipts().should('have.length', 0)
  })
})

describe('Load More', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display 10 recipes initially and 20 after scrolling', () => {
    cy.getRecipts().should('have.length', 10)
    cy.window().scrollTo('bottom')
    cy.wait(10000)
    cy.getRecipts().should('have.length', 20)
  })
})

describe('Language Routing', () => {
  it('should navigate to the French version when switching to French', () => {
    cy.visit(`/fr`)
    cy.url().should('include', '/fr')
    cy.get('[data-testid="recipts"]')
  })

  it('should navigate to the English version when switching to English', () => {
    cy.visit(`/en`)
    cy.url().should('include', '/')
    cy.get('[data-testid="recipts"]')
  })
})
