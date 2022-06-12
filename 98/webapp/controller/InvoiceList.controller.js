sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter,Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui5.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices : function (oEvent) {
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			var oList = this.byId("jerryinvoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function (oEvent) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail");
		}
	});
});