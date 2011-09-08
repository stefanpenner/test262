// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "getUTCFullYear" has { DontEnum } attributes
 *
 * @section: 15.9.5.11;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.11_Date.prototype.getUTCFullYear/S15.9.5.11_A1_T1.js;
 * @description: Checking absence of ReadOnly attribute;
 */

x = Date.prototype.getUTCFullYear;
if(x === 1)
  Date.prototype.getUTCFullYear = 2;
else
  Date.prototype.getUTCFullYear = 1;
if (Date.prototype.getUTCFullYear === x) {
  $ERROR('#1: The Date.prototype.getUTCFullYear has not the attribute ReadOnly');
}

