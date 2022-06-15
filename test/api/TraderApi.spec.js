/*
 * TradersRoom Partner API
 * An API that combines with the Trades Room Center.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: suzumura@rnrnstar.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TradersRoomPartnerApi);
  }
}(this, function(expect, TradersRoomPartnerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TradersRoomPartnerApi.TraderApi();
  });

  describe('(package)', function() {
    describe('TraderApi', function() {
      describe('traderPost', function() {
        it('should call traderPost successfully', function(done) {
          // TODO: uncomment, update parameter values for traderPost call and complete the assertions
          /*

          instance.traderPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TradersRoomPartnerApi.SuccessResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateTrader', function() {
        it('should call updateTrader successfully', function(done) {
          // TODO: uncomment, update parameter values for updateTrader call and complete the assertions
          /*

          instance.updateTrader(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(TradersRoomPartnerApi.SuccessResponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
