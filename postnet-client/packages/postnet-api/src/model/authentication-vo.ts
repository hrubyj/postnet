/* tslint:disable */
/* eslint-disable */
/**
 * POSTNET API
 * API k semestrální práce z PIA
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Přepravka pro autentikační údaje
 * @export
 * @interface AuthenticationVO
 */
export interface AuthenticationVO {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationVO
     */
    login: string;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationVO
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof AuthenticationVO
     */
    admin?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AuthenticationVO
     */
    token: string;
}


