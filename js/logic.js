angular.module('directive', []).directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // view -> model
            elm.bind('keyup', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            // model -> view
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
            };

        }
    };
});

function ContactManager ($scope){
    $scope.contacts=[
        {
            firstName: 'Max',
            lastName: 'Namazov',
            phoneNumber: '5555555',
            imageUrl: "img/max.jpg",
            note: "Contact manager developer",
            group: "Family"
        },
        {
            firstName: 'Alina',
            lastName: 'Klevtsova',
            phoneNumber: '7777777',
            imageUrl: "img/alina.jpg",
            note: "Developer's gf",
            group: "Family"
        },
        {
            firstName: 'Eugeny',
            lastName: 'Mazurenko',
            phoneNumber: '1111111',
            imageUrl: "img/mazurenko.jpg",
            note: "Developer's friend. You should invite him to the js-course!",
            group: "Friends"
        },
        {
            firstName: 'Alexandra',
            lastName: 'Gavronskaya',
            phoneNumber: '2222222',
            imageUrl: "img/gavronskaya.jpg",
            note: "Developer's friend. She's angry at him",
            group: "Friends"
        },
        {
            firstName: 'Alexandr',
            lastName: 'Gusev',
            phoneNumber: '9999999',
            imageUrl: "img/gusev.jpg",
            note: "Developer's co-worker. Talented guy",
            group: "Co-workers"
        }

    ];
    $scope.groups=[
        {id:"Family", name: "Family"},
        {id:"Co-workers", name: "Co-workers"},
        {id:"Friends", name: "Friends"}
    ];
    $scope.selectedContact=null;
    $scope.editMode = false;
    $scope.editButtonText="Edit";
    $scope.selectContact = function(contact){
        $scope.selectedContact = contact;
    };
    $scope.remove = function(){
        $scope.contacts.splice($scope.contacts.indexOf($scope.selectedContact), 1 );
        $scope.selectedContact=null;
    };
    $scope.toggleEditMode = function(){
        $scope.editMode = !$scope.editMode;
        $scope.editMode ? $scope.editButtonText="Ok" : $scope.editButtonText="Edit";
    };
    $scope.addNewContact = function(){
        var contact = {
                firstName:"" ,
                lastName:"" ,
                phoneNumber:"",
                imageUrl: "img/default_pic.png",
                note: ""
            };
        $scope.contacts.push(contact);
        $scope.selectedContact = contact;
        $scope.editMode=true;
        $scope.editButtonText="Save";
    }

}
