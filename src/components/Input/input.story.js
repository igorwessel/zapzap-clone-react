'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './index'

storiesOf('Styled Input with Theme', module)
    .add('first story', () => (
        <Input />
    ))
    .add('second story', () => (
        <Input/>
    ))