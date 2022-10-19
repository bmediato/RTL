import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente pokedex', () => {
  test('Testa se a página contém um h2', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { name: /encountered pokémons/i, level: 2 });
    expect(title).toBeInTheDocument();
  });

  test('Testa se quando clica no botao o próximo pokemon é exibido na tela', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();
    const btnPok = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnPok).toBeInTheDocument();
    userEvent.click(btnPok);
    const Pokemon2 = screen.getByText('Charmander');
    expect(Pokemon2).toBeInTheDocument();
  });

  test('Testa se a pokedex tem botões de filtro', () => {
    renderWithRouter(<App />);
    const btnfilter = screen.getAllByTestId(/pokemon-type-button/i);
    expect(btnfilter).toHaveLength(7);

    const btnEletric = screen.getByRole('button', { name: /electric/i });
    const btnFire = screen.getByRole('button', { name: /fire/i });
    const btnBug = screen.getByRole('button', { name: /bug/i });
    const btnPoison = screen.getByRole('button', { name: /poison/i });
    const btnPsychic = screen.getByRole('button', { name: /psychic/i });
    const btnNormal = screen.getByRole('button', { name: /normal/i });
    const btnDragon = screen.getByRole('button', { name: /dragon/i });

    expect(btnEletric).toBeInTheDocument();
    expect(btnFire).toBeInTheDocument();
    expect(btnBug).toBeInTheDocument();
    expect(btnPoison).toBeInTheDocument();
    expect(btnPsychic).toBeInTheDocument();
    expect(btnNormal).toBeInTheDocument();
    expect(btnDragon).toBeInTheDocument();
  });

  test('Testa se a pokedex tem botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', { name: /all/i });
    userEvent.click(btn);
    const pokemon = screen.getByText(/pikachu/i);
    expect(pokemon).toBeInTheDocument();
  });
});
