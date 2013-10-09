'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Kata 1', function () {

    beforeEach(function () {
        browser().navigateTo('../index.html');
    });

    it('should show a list of three todos using a html table tag and twitter bootstrap', function () {

        expect(repeater('.table tbody tr').count()).toBe(3);

    });

});
