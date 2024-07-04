import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Modal from './modal';
import {View} from 'react-native';

describe('Modal', () => {
  it('renders correctly with title and buttons', () => {
    const mockProps = {
      title: 'Modal Title',
      desc: 'Modal Description',
      lableCancle: 'Cancel',
      lableSubmit: 'Submit',
      onPressCancle: jest.fn(),
      onPressSubmit: jest.fn(),
    };

    const {getByText, getByTestId} = render(
      <Modal {...mockProps}>
        <View testID="modal-children" />
      </Modal>,
    );

    expect(getByText('Modal Title')).toBeTruthy();
    expect(getByText('Modal Description')).toBeTruthy();
    expect(getByText('Cancel')).toBeTruthy();
    expect(getByText('Submit')).toBeTruthy();

    fireEvent.press(getByText('Cancel'));
    expect(mockProps.onPressCancle).toHaveBeenCalled();

    fireEvent.press(getByText('Submit'));
    expect(mockProps.onPressSubmit).toHaveBeenCalled();

    expect(getByTestId('modal-children')).toBeTruthy();
  });
});
