import angular from 'angular';
import template from './app-header.html'

export const AppHeaderComponent = {
  template,
  controller: class AppHeaderComponent {
    constructor($window, $scope) {
      'ngInject'
      this.$window = $window
      this.$scope = $scope
    }
    $onInit() {
      this.isMobile = this.$window.innerWidth < 600
      this.showNav = !this.isMobile

      this.handleResize = e => {
        this.isMobile = e.target.innerWidth < 600
        this.showNav = !this.isMobile
        this.$scope.$digest()
      }

      angular.element(this.$window)
        .on('resize', this.handleResize)
    }
    $onDestroy() {
      angular.element(this.$window)
        .off('resize', this.handleResize)
    }
    $onChanges(changes) {}
    toggleNav($event) {
      $event.stopPropagation()
      if (this.isMobile) {
        this.showNav = !this.showNav
      }
    }
  }
}
