/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module kollavarshamDate
 */

import BaseDate from './baseDate.js';

/**
 * Represents a Kollavarsham date's year, month and date
 * @class KollavarshamDate
 * @constructor
 * @param [year=1] {Number} The Kollavarsham year
 * @param [month=1] {Number} The Kollavarsham month
 * @param [day=1] {Number} The Kollavarsham day
 * @extends BaseDate
 */
class KollavarshamDate extends BaseDate {
  constructor(year = 1, month = 1, day = 1) {
    super(year, month, day);
  }
}

export default KollavarshamDate;
