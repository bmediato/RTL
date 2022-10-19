import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente About', () => {
  test('Testa se a página contém um h2 com o texto about Pokédex', () => {
    renderWithRouter(<About />);
    const title = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
    expect(title).toBeInTheDocument();
  });

  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const p1 = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémons/i);
    const p2 = screen.getByText(/One can filter Pokémons by type, and see more details for each one of them/i);

    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  test('Testa se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const imgPok = screen.getByRole('img');
    expect(imgPok).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
