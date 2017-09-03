(function () {
    'use strict';

    angular
        .module('app')
        .controller('UserformController', UserformController);

    UserformController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function UserformController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.userform = userform;

        function userform() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('User Signup successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
