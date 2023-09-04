import React, { Component } from 'react';
import { Pokecard } from '../Pokecard/Pokecard';
import { clsx } from 'clsx';

type DexProps = {
  dex: Array<CharType>;
  isWinner: boolean;
  totalExp: number;
};

type CharType = {
  id: number | string;
  name: string;
  type: string;
  base_experience: number;
};

class Pokedex extends Component<DexProps> {
  render(): React.ReactNode {
    const { dex, isWinner, totalExp } = this.props;

    return (
      <div className="h-80">
        <h1
          className={`${clsx(
            isWinner && 'text-emerald-500',
            'text-red-500',
          )} font-bold text-center text-3xl  uppercase`}
        >
          {isWinner ? 'Winning Hand' : 'Losing Hand'}
        </h1>
        <p className="text-center text-xs font-light uppercase">
          Total Experience: {totalExp}
        </p>
        <div className="flex  items-start justify-evenly  h-[100px]">
          {dex.map((dx_char: CharType, idx) => {
            return (
              <li className="list-none">
                <Pokecard
                  type={dx_char.type}
                  id={Number(dx_char.id)}
                  key={idx}
                  name={dx_char.name}
                  exp={dx_char.base_experience}
                />
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export { Pokedex };
