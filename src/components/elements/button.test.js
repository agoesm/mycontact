import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import GeneralButton from './button';
// import GeneralButton from '@components/elements/button';

describe('GeneralButton', () => {
  it('renders ActivityIndicator when loading', () => {
    const {getByTestId} = render(<GeneralButton loading={true} />);
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('onPress', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <GeneralButton onPress={onPress} loading={true} />,
    );
    fireEvent.press(getByTestId('button'));
    expect(onPress).toHaveBeenCalled();
  });
});
