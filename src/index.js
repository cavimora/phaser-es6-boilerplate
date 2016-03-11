import GameState from './states/GameState';
import BootState from './states/BootState';
import PreLoadState from './states/PreLoadState';
import GameOverState from './states/GameOverState';

class Game extends Phaser.Game {

	constructor() {
		this.state.add('GameState', GameState, false);
		this.state.add('GameOverState', GameOverState, false);
		this.state.add('BootState', BootState, false);
		this.state.add('PreLoadState', PreLoadState, false);
		this.state.start('BootState');
	}

}

new Game();
