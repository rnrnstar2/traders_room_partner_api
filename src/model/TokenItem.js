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
import {ApiClient} from '../ApiClient';

/**
 * The TokenItem model module.
 * @module model/TokenItem
 * @version 1.0.0
 */
export class TokenItem {
  /**
   * Constructs a new <code>TokenItem</code>.
   * @alias module:model/TokenItem
   * @class
   * @param token {String} 
   */
  constructor(token) {
    this.token = token;
  }

  /**
   * Constructs a <code>TokenItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenItem} obj Optional instance to populate.
   * @return {module:model/TokenItem} The populated <code>TokenItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TokenItem();
      if (data.hasOwnProperty('token'))
        obj.token = ApiClient.convertToType(data['token'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} token
 */
TokenItem.prototype.token = undefined;

