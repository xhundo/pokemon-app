import React, { Component } from 'react';
import { Pokedex } from '../Pokedex/Pokedex';
import type { CharType } from '../../utils/types';

type DexProps = {
  dex: Array<CharType>;
  logger: (str: string) => string;
};

class Pokegame extends Component<DexProps> {
  render(): React.ReactNode {
    const { dex } = this.props;

    const assign_dex = (dex: CharType[]) => {
      let stackV1_dex_c: CharType;
      let stackV2_dex_c: CharType;
      let dex_group_one: Array<CharType> = [];
      let dex_group_two: Array<CharType> = [];

      const randomize = (dex: CharType[]): CharType => {
        return dex[Math.floor(Math.random() * dex.length)];
      };

      const rm_dupli = (char: CharType): Array<CharType> => {
        return dex.filter((dex_char: CharType) => dex_char !== char);
      };

      while (dex.length !== 0) {
        stackV1_dex_c = randomize(dex);
        if (dex_group_one.length !== 4) dex_group_one.push(stackV1_dex_c);

        for (let i = 0; i < dex_group_one.length; i++) {
          dex = rm_dupli(dex_group_one[i]);
        }

        stackV2_dex_c = randomize(dex);
        if (dex_group_two.length !== 4) {
          dex_group_two.push(stackV2_dex_c);
        }

        dex = rm_dupli(stackV2_dex_c);
      }

      return { dex_group_one, dex_group_two };
    };

    const getWinner = ({
      total_dexV1,
      total_dexV2,
    }: {
      total_dexV1: number;
      total_dexV2: number;
    }) => {
      if (total_dexV1 > total_dexV2) {
        return { dexV1: true, dexV2: false };
      } else {
        return { dexV1: false, dexV2: true };
      }
    };

    let _dex = assign_dex(dex);
    const dexV1_exp = _dex.dex_group_one.reduce(
      (acc: number, dx_char: CharType) => acc + dx_char.base_experience,
      0,
    );

    const dexV2_exp = _dex.dex_group_two.reduce(
      (acc: number, dx_char: CharType) => acc + dx_char.base_experience,
      0,
    );

    const isWin = getWinner({ total_dexV1: dexV1_exp, total_dexV2: dexV2_exp });

    console.log(_dex);
    return (
      <div className="flex flex-col items-center justify-center">
        <Pokedex
          dex={_dex.dex_group_one}
          totalExp={dexV1_exp}
          isWinner={isWin.dexV1}
        />
        <Pokedex
          dex={_dex.dex_group_two}
          totalExp={dexV2_exp}
          isWinner={isWin.dexV2}
        />
      </div>
    );
  }
}

export { Pokegame };
