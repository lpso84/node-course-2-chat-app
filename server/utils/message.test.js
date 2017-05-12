/*jshint esversion: 6 */
var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {

    var from = 'luis';
    var text = 'some message'
    var res = generateMessage(from, text);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from, text});
  });
});

describe('generateLocationMessage', function() {
  it('should generate correct location', () => {
    var from = 'User';
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1';
    var locationMessage = generateLocationMessage (from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from, url});
  });
});
