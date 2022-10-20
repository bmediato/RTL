import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa componente Pokemon', () => {
  test('Testa se é renderizado um card com as informações do pokémon', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const pokTitle = screen.getByRole('heading', { name: /pikachu details/i });
    expect(pokTitle).toBeInTheDocument();
    const pokName = screen.getByTestId('pokemon-name');
    expect(pokName).toHaveTextContent(/pikachu/i);
    const pokType = screen.getByTestId('pokemon-type');
    expect(pokType).toHaveTextContent(/electric/i);
    const pokWeight = screen.getByTestId('pokemon-weight');
    expect(pokWeight).toHaveTextContent(/average weight: 6.0 kg/i);
    const pokImage = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pokImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    const pokCheck = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    expect(pokCheck).toBeInTheDocument();
    userEvent.click(pokCheck);
    const pokStar = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(pokStar).toBeInTheDocument();
    expect(pokStar).toHaveAttribute('src', '/star-icon.svg');
  });
});
