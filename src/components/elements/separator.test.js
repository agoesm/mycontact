import React from 'react';
import {render} from '@testing-library/react-native';
import Separator from './separator';

const styles = {
  separator: {
    color: '#000',
  },
};

describe('Separator', () => {
  it('renders correctly with default styles', () => {
    const {getByTestId} = render(<Separator />);
    const separator = getByTestId('separator');
    expect(separator.props.style).toContainEqual(styles.separator);
  });

  it('applies custom styles correctly', () => {
    const customStyle = {backgroundColor: 'blue'};
    const {getByTestId} = render(<Separator style={customStyle} />);
    const separator = getByTestId('separator');
    expect(separator.props.style).toContainEqual(customStyle);
  });
});
