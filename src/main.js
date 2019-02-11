import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import Gameover from './scenes/gameover.js';
import Ui from './scenes/Ui.js';
import Menu from './scenes/menu.js';





const config = {
    title: 'Snake',
    width: 320,
    height: 180,
    type: Phaser.AUTO,
    parent: 'container',
    backgroundColor: '#00bf8f',
    pixelArt: true,
    physics: {
        default:'arcade',
        // arcade: {
        //     gravity: {
        //         y:100
        //     }
        // }
    },
    scene: [Bootloader, Play, Gameover, Ui, Menu]
}

new Phaser.Game(config);