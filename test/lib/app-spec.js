var chai = require("chai")
  , sinon = require("sinon")
  , expect = chai.expect
  , c = require('../../config/app')
  , A = require('../../lib/app')
  , device = require('../blueprints/device')
  , sensor = require('../blueprints/sensor')
  , gpio = require('../mocks/gpio');

describe("Biodome", function() {
  describe('#new', function() {
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
      var s = sensor.make();
      app.addSensor(s);

      expect(app.sensor(s.id)).to.equal(s);
    });

    it('returns null for unrecognized id', function() {
      var app = new A(c);
      expect(app.device("does_not_exist")).to.be.null;
    });
  });

 describe('#device', function() {
    it('returns device by id', function() {
      var app = new A(c);
      var d = device.make();
      app.addDevice(d);

      expect(app.device(d.id)).to.equal(d);
    });

    it('returns null for unrecognized id', function() {
      var app = new A(c);
      expect(app.device("does_not_exist")).to.be.null;
    });
  });
});