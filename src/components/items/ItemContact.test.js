import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ItemContact from './ItemContact';

const mockData = {
  firstName: 'John',
  lastName: 'Doe',
  photo: 'https://example.com/avatar.jpg',
};

describe('ItemContact', () => {
  it('renders correctly with data', () => {
    const onPressMock = jest.fn();
    const {getByText, getByTestId} = render(
      <ItemContact data={mockData} onPress={onPressMock} />,
    );

    expect(getByTestId('item-contact')).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByTestId('avatar-image')).toBeTruthy();
  });

  it('triggers onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <ItemContact data={mockData} onPress={onPressMock} />,
    );

    fireEvent.press(getByTestId('item-contact'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
