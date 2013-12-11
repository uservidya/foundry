// Load in dependencies
var expect = require('chai').expect;
var fixtureUtils = require('./utils/fixtures');
var Foundry = require('../bin/foundry');

// Guarantee safeguards against exec are in place (see WARNING.md)
var childUtils = require('./utils/child-process');

// Define our test
describe('A release', function () {
  describe.only('in a node module (npm)', function () {
    fixtureUtils.fixtureDir('npm');
    before(function release (done) {
      childUtils.shellExec.allowDuring(Foundry, 'preRelease');
      var program = new Foundry();
      program.parse(['node', '/usr/bin/foundry', 'release', '0.1.0']);
      setTimeout(done, 1000);
    });


    it('', function () {
      console.log(process.cwd());
    });
  });

  describe.skip('in a bower module', function () {
  });
  describe.skip('in a component module', function () {
  });
  describe.skip('in a PyPI package', function () {
  });
});