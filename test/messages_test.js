const messages = require('../src/messages');
const assert = require('assert');
require('should');

describe('messages', function() {
    describe('getGenericMessage', function() {
        it('Should return the date and time ', function() {
            const message = messages.getGenericMessage();
            comparisonString = message.match(
                'It\'s\\s\\d{1,2}\\sh\\s\\d{1,2}\\sm');
            const comparison = comparisonString != null && comparisonString != "";
            assert.equal(true, comparison)
        });
    });
});