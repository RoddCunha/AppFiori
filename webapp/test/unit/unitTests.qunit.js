/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AppFioriAluno06/appfiorialuno06/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
