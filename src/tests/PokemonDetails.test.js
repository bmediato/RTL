import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokemon Details', () => {
  test('Testa se as informações detalhadas do pokemon são mostradas na tela', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const pokemonDetails = screen.getByRole('heading', { name: /pikachu details/i, level: 2 });
    expect(pokemonDetails).toBeInTheDocument();
    const summary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(summary).toBeInTheDocument();
    const text = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i);
    expect(text).toBeInTheDocument();
  });

  test('Testa se existe uma seção com mapas contendo a localização do pokemon', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const locationPok = screen.getByRole('heading', { name: /game locations of pikachu/i, level: 2 });
    const text = screen.getByText(/kanto viridian forest/i);
    const text2 = screen.getByText(/kanto power plant/i);
    const imgLoc = screen.getAllByRole('img', { name: /pikachu location/i });

    expect(locationPok).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(imgLoc[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgLoc[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Testa se o usuario pode favoritar um pokemon atraves da página de detalhes', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const check = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    userEvent.click(check);
    expect(check.checked).toBe(true);
    userEvent.click(check);
    expect(check.checked).toBe(false);
  });
});
