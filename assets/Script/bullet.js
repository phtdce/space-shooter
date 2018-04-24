cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        },

        sound: {
            default: null,
            url: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    onEnable(){
        cc.audioEngine.playEffect(this.sound, false);
    },

    // update (dt) {},
});