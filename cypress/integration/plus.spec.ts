/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

context("Plus Voting History", () => {
  it("show 404 if invalid route ([[...slug]])", () => {
    cy.visit("/plus/history/asd", { failOnStatusCode: false });
    cy.contains("Not Found");

    cy.visit("/plus/history/1/2000/1", { failOnStatusCode: false });
    cy.contains("Not Found");
  });

  it("can view voting history", () => {
    cy.visit("/plus/history");
    cy.dataCy("tier-selector").select("+2 - January 2020");

    cy.contains("58.3%");
    cy.contains("8.3%");
  });
});

context("Plus Home Page", () => {
  it("can filter through suggestions not logged in", () => {
    cy.visit("/plus");
    cy.get("section")
      .contains("yooo so cracked")
      .dataCy("plus-three-radio")
      .click();

    cy.get("section").contains("yooo so cracked").should("not.exist");
  });

  it("can submit new suggestion and persists with reload", () => {
    cy.login("sendou");
    cy.visit("/plus");
    cy.dataCy("suggestion-button")
      .click()
      .get(".select__value-container")
      .type("NZAP{enter}")
      .dataCy("region-select")
      .select("EU")
      .dataCy("description-textarea")
      .type("always trust in nzap")
      .dataCy("submit-button")
      .click();

    cy.contains("always trust in nzap")
      .reload()
      .contains("always trust in nzap")
      .dataCy("suggestion-button")
      .should("not.exist");
  });

  it("can add comment to suggestion and toast shows", () => {
    cy.login("sendou");
    cy.visit("/plus");
    cy.dataCy("comment-button")
      .click()
      .dataCy("comment-textarea")
      .type("yes agreed")
      .dataCy("submit-button")
      .click();

    cy.contains("Comment added");
    cy.contains('"yes agreed" - Sendou#0012');
    cy.dataCy("comment-button").should("not.exist");
  });

  it("can add vouch", () => {
    cy.login("sendou");
    cy.visit("/plus");
    cy.dataCy("vouch-button")
      .click()
      .get(".select__value-container")
      .type("NZAP{enter}")
      .dataCy("region-select")
      .select("EU")
      .dataCy("submit-button")
      .click();

    cy.dataCy("vouch-button").should("not.exist");
    cy.contains("Vouched NZAP#0011");
  });

  it("can't vouch if canVouchAgainAfter set", () => {
    cy.login("nzap");
    cy.visit("/plus");

    cy.dataCy("vouch-button").should("not.exist");
    cy.contains("Can vouch again after:");
  });
});
