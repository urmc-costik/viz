import React from 'react';

import { storiesOf } from '@kadira/storybook';

import { getChart } from '../../../../src/utils/settings/factory';
const DeviceSettings = getChart('carelink');
const flatRateSettings = require('../../../../data/pumpSettings/medtronic/flatrate.json');
const multiRateSettings = require('../../../../data/pumpSettings/medtronic/multirate.json');
const mmolL = 'mmol/L';
const timePrefs = { timezoneAware: false, timezoneName: null };

storiesOf('Medtronic', module)
  .add('flat rate', () => (
    // eslint-disable-next-line global-require
    <DeviceSettings pumpSettings={flatRateSettings} bgUnits={mmolL} timePrefs={timePrefs} />
  ))
  .add('multi rate', () => (
    // eslint-disable-next-line global-require
    <DeviceSettings pumpSettings={multiRateSettings} bgUnits={mmolL} timePrefs={timePrefs} />
  ));
