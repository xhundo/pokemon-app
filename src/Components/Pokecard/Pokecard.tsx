import React, { Component } from 'react';
import { padID } from '../../utils/helper';

type SkillProps = {
  id: number | string;
  name: string;
  type: string;
  exp: number;
};

class Pokecard extends Component<SkillProps> {
  static defaultProps = {
    id: 4,
    name: 'Charmander',
    type: 'fire',
    exp: 64,
  };

  render(): React.ReactNode {
    let { id, name, type, exp } = this.props;
    id = padID(id as number);
    console.log(id);

    return (
      <div className="from-blue-500 to-green-300 bg-gradient-to-t m-2 p-2 border-4  border-amber-400  flex-col  rounded-xl">
        <p className="text-blue-500 text-center font-bold">{name}</p>
        <img
          className="w-20 h-20 m-4"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
        />
        <p className="text-yellow-300 text-center text-xs font-semibold uppercase">{`type: ${type}`}</p>
        <p className="text-white uppercase text-xs font-semibold  mb-2 text-center">
          {' '}
          exp: {exp}
        </p>
      </div>
    );
  }
}

export { Pokecard };
