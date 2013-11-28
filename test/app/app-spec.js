var chai = require("chai")
  , sinon = require("sinon")
  , expect = chai.expect
  , c = require('../../config/app')
  , A = require('../../app/app')
  , device = require('../../app/device')
  , sensor = require('../../app/sensor')
  , mockGpio = require('../mocks/gpio');

describe("Biodome", function() {
  describe('#new', function() {
    it('uses mock GPIO in development', function() {
      var app = new A(c);
      expect(app.gpio).to.deep.equal(mockGpio);
    });

    it('has an empty devices array', function() {
      var app = new A(c);
      expect(app.devices.length).to.equal(0);
    });

    it('has an empty sensors array', function() {
      var app = new A(c);
      expect(app.sensors.length).to.equal(0);
    });
  });

  describe('#sensor', function() {
    it('returns sensor by id', function() {
      var app = new A(c);
      var s = new sensor("test");
      app.sensors.push(s);

      expect(app.sensor("test")).to.equal(s);
    });

    it('returns null for unrecognized id', function() {
      var app = new A(c);
      var d = new device(app.gpio.export(1), "test");
      app.devices.push(d);

      expect(app.device("does_not_exist")).to.be.null;
    });
  });

 describe('#device', function() {
    it('returns device by id', function() {
      var app = new A(c);
      var d = new device(app.gpio.export(1), "test");
      app.devices.push(d);

      expect(app.device("test")).to.equal(d);
    });

    it('returns null for unrecognized id', function() {
      var app = new A(c);
      var d = new device(app.gpio.export(1), "test");
      app.devices.push(d);

      expect(app.device("does_not_exist")).to.be.null;
    });
  });
});
