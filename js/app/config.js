mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/about', {
            templateUrl: 'js/app/component/about-component/about.html',
            controller:  'aboutController'
        }).
        when('/education', {
            templateUrl: 'js/app/component/education-component/education.html',
            //controller: 'component/education-component/education-controller.js'
        }).
        when('/skills', {
            templateUrl: '/js/app/component/skills-component/skills.html',
            //controller: 'component/skill-component/skills-controller.js'
        }).
        when('/contacts', {
            templateUrl: '/js/app/component/contacts-component/contacts.html',
            //controller: 'component/contacts-component/contacts-controller.js'
        }).
        otherwise({
            redirectTo: '/about'
        })
}]);

