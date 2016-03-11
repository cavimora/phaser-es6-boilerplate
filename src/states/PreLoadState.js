class PreLoadState extends Phaser.State{
    preload(){
        this.progress = this.game.add.text(
            this.game.world.centerX, 
            this.game.world.centerY - 30,
            '0%', { fill: 'white' });
        this.progress.anchor.setTo(0.5, 0.5);
        
        // Show progress bar
        let progressBar = this.game.add.sprite(
            this.game.world.centerX, this.game.world.centerY, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        this.game.load.setPreloadSprite(progressBar);
        
        
        // Set callbacks
        this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.fileComplete, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);
        
        // Load all assets       
        this.game.load.image('asset', 'assets/images/spike.png');        
    }
    
    fileComplete(progress){
        this.progress.text = progress + '%';
        //console.log(this.progress.text);
    }
    loadStart(){

    }
    loadComplete(){
        this.game.state.start('GameState');
    }
}   

export default PreLoadState;