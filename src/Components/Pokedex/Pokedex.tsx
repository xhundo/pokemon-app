import React, { Component } from 'react';
import { Pokecard } from '../Pokecard/Pokecard';

type DexProps = {
	dex: Array<CharType>;
};

type CharType = {
	id: number;
	name: string;
	type: string;
	base_experience: number;
};

class Pokedex extends Component<DexProps> {
	render(): React.ReactNode {
		const { dex } = this.props;
		return (
			<div className="flex flex-col justify-center">
				<h1 className="text-slate-400 text-center text-lg">Pokedex</h1>
				<div className="flex flex-wrap justify-center">
					{dex.map((dx_char: CharType) => {
						return (
							<li className="list-none">
								<Pokecard
									type={dx_char.type}
									id={dx_char.id}
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
