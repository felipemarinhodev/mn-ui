// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import metronetTheme from './metronetTheme';

addons.setConfig({
  theme: metronetTheme,
});
