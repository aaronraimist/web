class ExtensionsIntroModal {

  constructor() {
    this.restrict = "E";
    this.templateUrl = "frontend/directives/extensions-intro-modal.html";
    this.scope = {

    };
  }

  link($scope, element) {
    'ngInject';


    $scope.close = function() {
      element.remove();
    }

  }

}

angular.module('app.frontend').directive('extensionsIntroModal', () => new ExtensionsIntroModal);
