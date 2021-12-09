/*global QUnit*/
sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Worklist"
],  function (opaTest) {
	"use strict";

	QUnit.module("Posts");

	opaTest("Should see the table with all posts", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();
	// Assertions
	Then.onTheWorklistPage.theTableShouldHavePagination().
	and.theTitleShouldDisplayTheTotalAmountOfItems();
});

opaTest("Should be able to load more items", function (Given, When, Then) {
//Actions
When.onTheWorklistPage.iPressOnMoreData();

// Assertions
		// Assertions
		Then.onTheWorklistPage.theTableShouldHaveAllEntries().
			and.theTitleShouldDisplayTheTotalAmountOfItems();

		// Cleanup
		Then.iTeardownMyApp();
	});

});