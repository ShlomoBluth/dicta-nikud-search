Cypress.Commands.add('nikudSearchRequest',({status=200,message='',delaySeconds=0})=>{
  cy.intercept('GET', '/api', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },).as('api')
  cy.get('input[id="search-input-dd"]').type('אשה')
  cy.get('ul[id=search-typeaheads').children('li').first().click()
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('i[class="fas fa-search"]').click({force: true})
  
  if(message.length>0){
    cy.contains(message,{timeout:1000*delaySeconds}).should('exist')
  }
      
})  