import React from 'react';
import {render} from '@testing-library/react-native';
import TextInput from './text-input';

describe('TextInput', () => {
  it('renders correctly with label', () => {
    const {getByText} = render(<TextInput label="Username" />);
    expect(getByText('Username')).toBeTruthy();
  });
});
