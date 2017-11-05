import React from 'react';
import YourComponent from '{target-module}';

import { storiesOf } from '@storybook/react';

storiesOf('YourComponent', module).add('basic', () => <YourComponent />);
