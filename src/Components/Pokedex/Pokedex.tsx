import React, { Component } from 'react';
import { Pokecard } from '../Pokecard/Pokecard';

type DexProps = {
  dex: Array<CharType>;
  logger: (str: string) => string;
};

type CharType = {
  id: number;
  name: string;
  type: string;
  base_experience: number;
};

class Pokedex extends Component<DexProps> {
  render(): React.ReactNode {
    const { dex, logger } = this.props;
    logger('test');
    return (
      <div className="flex flex-col justify-center">
        <h1 className="text-red-500 font-bold text-center text-3xl  uppercase mt-12">
          Pokedex
        </h1>
        <div className="flex flex-wrap items-start justify-center h-fuh-full">
          {dex.map((dx_char: CharType, idx) => {
            return (
              <li className="list-none">
                <Pokecard
                  type={dx_char.type}
                  id={dx_char.id}
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
