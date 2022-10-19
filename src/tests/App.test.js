import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente App', () => {
  test('Testa se o topo da aplicação contém o link Home', () => {
    const { history: { location: { pathname } } } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });

    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    expect(pathname).toBe('/');
  });

  test('Testa se o topo da aplicação contém o link About', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /about/i });

    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  test('Testa se o topo da aplicação contém o Pokemons Favoritos', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavPok = screen.getByRole('link', { name: /favorite pokémons/i });

    expect(linkFavPok).toBeInTheDocument();
    userEvent.click(linkFavPok);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/favorites');
  });

  test('Testa se a aplicação é redirecionada para pagina Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    const notFound = '/aaa';
    act(() => { history.push(notFound); });

    const notFoundText = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });
    const notFoundImg = screen.getByAltText(/Pikachu crying because the page requested was not found/i);

    expect(notFoundText).toBeInTheDocument();
    expect(notFoundImg).toBeInTheDocument();
  });
});
