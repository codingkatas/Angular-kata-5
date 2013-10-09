/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global module, inject, describe, it, oef, expect, log */

describe('HomeController tests', function () {

    beforeEach(function () {
        module('Kata');
    });

    describe('Test that HomeController provides a ToDo list', function () {

        var scope;

        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            $controller("kata.home.HomeController", {
                $scope: scope
            });
        }));

        it('should put a list of ToDos on the scope ', function () {

            var todos = scope.todoList;

            expect(todos.length).toBe(3);
        });
    });


});