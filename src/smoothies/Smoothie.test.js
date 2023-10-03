import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SelectedIng from './SelectedIng';
import configureStore from 'redux-mock-store';

describe('YourComponent', () => {
  const mockStore = configureStore();
  const initialState = {}; 
  const store = mockStore(initialState);

  it('correctly calculates newSum', () => {
    
    const mockData = [
      { name: 'Інгредієнт 1', price: 10 },
      { name: 'Інгредієнт 2', price: 16 },
      { name: 'Інгредієнт 3', price: 10 }
    ];

    
    const newSum = 12

     render(
      <Provider store={store}>
        <SelectedIng data={mockData} onDataUpdate={() => {}} />
      </Provider>

    );
    const priceElement = screen.getByText(/Ціна : \d+ грн\./);
    const priceText = priceElement.textContent;
    expect(priceText).toContain(String(newSum));
  });
});

