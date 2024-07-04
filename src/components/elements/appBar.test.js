import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import AppBar from './appBar';

describe('Appbar', () => {
  it('renders the title correctly', () => {
    const {getByText} = render(<AppBar title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('calls onPressBack when back action is pressed', () => {
    const onPressBack = jest.fn();
    const {getByA11yRole} = render(<AppBar onPressBack={onPressBack} />);
    fireEvent.press(getByA11yRole('button', {name: 'Back'}));
    expect(onPressBack).toHaveBeenCalled();
  });

  it('calls onPressAction when action is pressed', () => {
    const onPressAction = jest.fn();
    const {getByA11yRole} = render(
      <AppBar onPressAction={onPressAction} iconAction="menu" />,
    );
    fireEvent.press(getByA11yRole('button', {name: 'Action'}));
    expect(onPressAction).toHaveBeenCalled();
  });

  //   it('applies the correct styles based on the mode prop', () => {
  //     const {getByTestId} = render(<AppBar mode="primary" />);
  //     const header = getByTestId('appbar-header');
  //     expect(header.props.style).toContainEqual({
  //       backgroundColor: mockTheme.colors.primary,
  //     });

  //     const {getByTestId: getByTestIdSecondary} = render(
  //       <AppBar mode="secondary" />,
  //     );
  //     const headerSecondary = getByTestIdSecondary('appbar-header');
  //     expect(headerSecondary.props.style).toContainEqual({
  //       backgroundColor: mockTheme.colors.background,
  //     });
  //   });
});
