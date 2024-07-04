import React from 'react';
import {render} from '@testing-library/react-native';
import ItemActionContact from './ItemActionContact';

describe('ItemActionContact', () => {
  it('renders correctly with icon and name', () => {
    const mockProps = {
      icon: 'mail',
      name: 'Email',
    };

    const {getByText, getByTestId} = render(
      <ItemActionContact {...mockProps} />,
    );

    expect(getByTestId('action-contact-container')).toBeTruthy();
    expect(getByTestId('action-button')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
  });
});
