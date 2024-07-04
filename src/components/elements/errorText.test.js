import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorText from './errorText';

describe('ErrorText', () => {
  it('renders the error text correctly', () => {
    const {getByText} = render(<ErrorText errValue="Error message" />);
    expect(getByText('Error message')).toBeTruthy();
  });
});
