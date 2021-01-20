Cypress.Commands.add('nikudSearchRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('GET', url+'/**', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.get('input[id="search-input-dd"]').type('אשה')
  if(url=='/typeaheadapi'){
    if(delaySeconds>0){
      cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
    }else{
      cy.get('[class*="spinner"]').should('not.exist')
    }
    if(message.length>0){
      cy.contains(message).should('exist')
    }
  }else{
    cy.get('ul[id=search-typeaheads').children('li').first().click()
    if(message.length>0){
      cy.contains(message).should('not.exist')
    }
    cy.get('i[class="fas fa-search"]').click({force: true})
    if(delaySeconds>0){
      cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
    }else{
      cy.get('[class*="spinner"]').should('not.exist')
    }
    if(message.length>0){
      cy.contains(message).should('exist')
    }
  }
      
})  