var app = angular.module('mybooks', []);

//Main Controller
app.controller('MainController', function() {
    'use strict';
    var vm = this;

    /**** private functions ****/
    //initialize the data when page is first loaded.
    function init() {

        vm.newBook = {}; //object to hold a new book entry
        vm.showBookEntryForm = false; //hide book entry form dialog initially

        //the list of books. 
        vm.books = [{
            title: 'El Pooch',
            author: 'Alex Nelson',
            rating: 3.5,
            sample: 'Two before narrow not relied how except moment myself. Dejection assurance mrs led certainly. So gate at no only none open. Betrayed at properly it of graceful on. Dinner abroad am depart ye turned hearts as me wished. Therefore allowance too perfectly gentleman supposing man his now. Families goodness all eat out bed steepest servants. Explained the incommode sir improving northward immediate eat. Man denoting received you sex possible you. Shew park own loud son door less yet.',
            image: 'http://lorempixel.com/100/160/animals/1'
        }, {
            title: 'The Flight',
            author: 'Scot Masterson',
            rating: 4.0,
            sample: 'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed.',
            image: 'http://lorempixel.com/100/160/animals/2'
        }];
    }

    /**** public functions ****/
    //open the form for inputing a new book info
    vm.openBookDialog = function() {
        vm.newBook = {};
        vm.showBookEntryForm = true;
    };

    //save the new book into the list
    vm.submitNewBook = function() {
        var random = Math.floor(Math.random() * 10);
        vm.newBook.image = 'http://lorempixel.com/100/160/animals/' + random;
        vm.newBook.rating = 0;
        vm.newBook.sample = 'Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So before remark at depart. Did son unreserved themselves indulgence its. Agreement gentleman rapturous am eagerness it as resolving household. Direct wicket little of talked lasted formed or it. Sweetness consulted may prevailed for bed out sincerity. '
        vm.books.push(vm.newBook);
        vm.showBookEntryForm = false;
    };

    init();
});


//Book Directive as a resuable component
app.directive('book', function() {
    'use strict';
    return {
        restrict: 'E',
        scope: {
            book: '='
        },
        replace: true,
        templateUrl: 'book.html',
        link: function($scope, $elements, $attrs) {

        }
    };
});
