import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testando componente Favorte Pokemons', () => {
  test('Teste de é exibida na tela muam mensagem, caso nao tenha pokemons favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const noFav = screen.getByText(/No favorite pokemon found/i);
    expect(noFav).toBeInTheDocument();
  });

  test('Testa se são exibidos todos os cards de pokémons favoritos', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    const check = screen.getByRole('checkbox');
    userEvent.click(check);
    const linkFavPok = screen.getByRole('link', { name: /favorite pokémons/i });
    console.log(linkFavPok);
    userEvent.click(linkFavPok);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });
});
