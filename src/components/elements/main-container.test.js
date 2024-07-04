import React from 'react';
import {render} from '@testing-library/react-native';
import MainContainer from './main-container';
import {View} from 'react-native';

describe('MainContainer', () => {
  it('renders children correctly', () => {
    const {getByText} = render(
      <MainContainer>
        <View testID="child-view" />
      </MainContainer>,
    );
    expect(getByText('child-view')).toBeTruthy();
  });
});
