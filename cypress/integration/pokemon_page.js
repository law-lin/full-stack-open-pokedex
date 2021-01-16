describe('Pokedex', function () {
  it('Pokemon page can be opened from front page', function () {
    cy.visit('http://localhost:8081');
    cy.get('a[href="/pokemon/charmander"]').click();
    cy.contains('charmander');
    cy.contains('blaze');
  });
});
