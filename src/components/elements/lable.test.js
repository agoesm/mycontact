import React from 'react';
import {render} from '@testing-library/react-native';
import Label from './label';

describe('Label', () => {
  it('renders the text correctly', () => {
    const {getByText} = render(<Label label="test message" />);
    expect(getByText('test message')).toBeTruthy();
  });
});
