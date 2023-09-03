import React, { Component } from 'react';

type skill = {
	id: number;
	name: string;
	type: string;
	exp: number;
};

class Pokecard extends Component<skill> {
	render(): React.ReactNode {
		const { id, name, type, exp } = this.props;

		return (
			<div className="bg-slate-400 p-3 rounded-xl">
				<p className="text-blue-500 text-center">{name}</p>
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
				/>
				<p className="text-red-500 text-center">{`type: ${type}`}</p>
				<p className="text-amber-300 text-center mb-6"> exp: {exp}</p>
			</div>
		);
	}
}

export { Pokecard };
