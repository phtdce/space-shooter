cc.Class({
    extends: require('bullet'),

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onEnable(){
        cc.audioEngine.playEffect(this.sound, false);
    },

    // update (dt) {},
});
