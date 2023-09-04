import React, { Component } from 'react';

type Skill = {
  id: number;
  name: string;
  type: string;
  exp: number;
};

class Pokecard extends Component<Skill> {
  static defaultProps = {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    exp: 64,
  };

  render(): React.ReactNode {
    const { id, name, type, exp } = this.props;

    return (
      <div className="bg-amber-400 m-6 border-4  p-3 border-white border- flex-col  rounded-xl">
        <p className="text-blue-500 text-center font-bold">{name}</p>
        <img
          className="w-20 h-20 m-4"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <p className="text-red-500 text-center text-xs font-semibold uppercase">{`type: ${type}`}</p>
        <p className="text-white uppercase text-xs font-semibold  mb-2 text-center">
          {' '}
          exp: {exp}
        </p>
      </div>
    );
  }
}

export { Pokecard };
