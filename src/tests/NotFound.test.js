import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testando o componente NotFound', () => {
  test('Testa se a página contém um h2', () => {
    renderWithRouter(<NotFound />);
    const titleH2 = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });
    expect(titleH2).toBeInTheDocument();
  });
  test('Testa se a página mostra uma imagem', () => {
    renderWithRouter(<NotFound />);
    const nFoundImg = screen.getByRole('img');
    expect(nFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
