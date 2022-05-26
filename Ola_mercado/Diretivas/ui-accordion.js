angular.module("MyApp").directive("uiAccordions", function () {
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (accordion) {
				accordions.push(accordion);
			};

			this.closeAll = function () {
				accordions.forEach(function (accordion) {
					accordion.isOpened = false;
				});
			}
		}
	};
});
angular.module("MyApp").directive("uiAccordion", function () {
	return {
		templateUrl: "Templates/ui-accordion-directive.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^uiAccordions",
		link: function (scope, element, attrs, ctrl) {
			ctrl.registerAccordion(scope);
			scope.open = function () {
				ctrl.closeAll();
				scope.isOpened = true;
			};
		}
	};
});