/*
 * == BSD2 LICENSE ==
 * Copyright (c) 2016, Tidepool Project
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the associated License, which is identical to the BSD 2-Clause
 * License as published by the Open Source Initiative at opensource.org.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * You should have received a copy of the License along with this program; if
 * not, you can obtain one from Tidepool Project at tidepool.org.
 * == BSD2 LICENSE ==
 */

import * as actionTypes from '../constants/actionTypes';

export function focusTrendsCbgSlice(userId, sliceData, slicePosition, focusedKeys) {
  return {
    type: actionTypes.FOCUS_TRENDS_CBG_SLICE,
    payload: { focusedKeys, sliceData, slicePosition, userId },
  };
}

export function markTrendsViewed(userId) {
  return {
    type: actionTypes.MARK_TRENDS_VIEWED,
    payload: { userId },
  };
}

export function unfocusTrendsCbgSlice(userId) {
  return {
    type: actionTypes.UNFOCUS_TRENDS_CBG_SLICE,
    payload: { userId },
  };
}
