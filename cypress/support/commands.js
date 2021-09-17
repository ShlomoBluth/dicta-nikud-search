Cypress.Commands.add('testMessage',({message='',delaySeconds=0})=>{
  cy.then(()=>{
    if(delaySeconds>0){
      cy.get('[class*="spinner"]').should('exist')
      cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
    }else{
      cy.get('[class*="spinner"]').should('not.exist')
    }
  }).then(()=>{
    if(message.length>0){
      cy.contains(message).should('exist')
    }
  })
})

Cypress.Commands.add('nikudSearchRun',()=>{
  cy.get('input[class*="d-inline"]',{timeout:30000}).type('שִיר',{force:true})
  cy.get('[class*="spinner"]',{timeout:60000}).should('not.exist')
  cy.get('[id="search-typeaheads"]',{timeout:60000}).should('exist')
  cy.get('button[class*="text-left btn-link"]').click({force: true})
})

Cypress.Commands.add('typeaheadapiTest',({message='',delaySeconds=0})=>{
  cy.get('input[id="search-input-dd"]').type('אשה')
  cy.testMessage({
    message:message,
    delaySeconds:delaySeconds
  })
})

Cypress.Commands.add('nikudSearchRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('GET', url+'/**', {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  if(url=='/typeaheadapi'){
    cy.typeaheadapiTest({
      message:message,
      delaySeconds:delaySeconds
    })
  }else{
    cy.nikudSearchRun()
    cy.testMessage({
      message:message,
      delaySeconds:delaySeconds
    })
  }
      
})  