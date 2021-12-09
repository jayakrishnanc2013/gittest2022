/*global QUnit*/

sap.ui.define([
	"sap/ui/demo/bulletinboard/model/formatter"
], function (formatter) {
	"use strict";

	QUnit.module("Number unit");

	function numberUnitValueTestCase(assert, sValue, fExpectedNumber) {
		// Act
		var fNumber = formatter.numberUnit(sValue);

		// Assert
		assert.strictEqual(fNumber, fExpectedNumber, "The rounding was correct");
	}

	QUnit.test("Should round down a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.123", "3.12");
	});

	QUnit.test("Should round up a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.128", "3.13");
	});

	QUnit.test("Should round a negative number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "-3", "-3.00");
	});

	QUnit.test("Should round an empty string", function (assert) {
		numberUnitValueTestCase.call(this, assert, "", "");
	});

	QUnit.test("Should round a zero", function (assert) {
		numberUnitValueTestCase.call(this, assert, "0", "0.00");
	});
	//adding more Quni module for price formatter
	QUnit.module("Price State");
	function priceStateTestCase(oOptions) {
		var sState = formatter.priceState(oOptions.price);
		oOptions.assert.strictEqual(sState, oOptions.expected, "The Price State was correct");

	}
	QUnit.test("If the price value is less than 50 then it should display in green in colour", function (assert) {
		priceStateTestCase.call(this,
			{
				assert: assert,
				price: 42,
				expected: "Success"
			});
	});
	QUnit.test("If the price value is greater than 50 then it should display in Red in colour", function (assert) {
		priceStateTestCase.call(this,
			{
				assert: assert,
				price: 51,
				expected: "Error"
			});
	});
	QUnit.module("Location Empty");
	function LocationEmptyTestCase(oOptions) {
		debugger
		var sState = formatter.IsLocationEmpty(oOptions.Location);
		oOptions.assert.strictEqual(sState, oOptions.expected, "The Location is Filled");

	}
	QUnit.test("If the Location value is empty then it should display in red in colour", function (assert) {
		LocationEmptyTestCase.call(this,
			{
				assert: assert,
				Location: "",
				expected: "Error"
			});


	});
});
