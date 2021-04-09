import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {DetailsScreen} from '../components/DetailsScreen';

const props = {
  navigation: {
    setParams: jest.fn(),
  },
  route: {
    params: {
      messageParam: 'something',
      messageNote: 'something else',
    },
  },
};

describe('DetailsScreen', () => {
  it('changes the message text', () => {
    const messageText = 'some new message';
    const {getByText, getByTestId} = render(<DetailsScreen {...props} />);
    const input = getByTestId('text-input');
    fireEvent.changeText(input, messageText);
    const button = getByText('Change Message');
    fireEvent.press(button);
    const message = getByText(messageText);
    expect(message).toHaveTextContent(messageText);
  });
});
