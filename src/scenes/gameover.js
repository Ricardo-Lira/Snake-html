class Gameover extends Phaser.Scene{
    constructor(){
        super('Gameover');
    }

    preload(){
       
    }

    create(){
        this.scene.stop('Ui');
        this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2 -30, 'pixel', 'GAMEOVER', 20).setOrigin(0.5);

        this.event = setTimeout(() => {
            this.salirEscena();
            
        }, 5000);

        this.input.keyboard.on('keydown_ENTER', ()=>{
            this.salirEscena();
        })
        this.input.on('pointerdown', () =>{
            this.salirEscena();
        })
    }
    salirEscena(){
        clearTimeout(this.event);

        this.scene.start('Menu');
    }
 
}

export default Gameover;