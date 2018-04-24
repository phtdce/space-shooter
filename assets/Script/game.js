cc.Class({
    extends: cc.Component,

    properties: {
        music:{
            default: null,
            url: cc.AudioClip
        }
    },

    // use this for initialization
    onLoad: function () {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;

        cc.audioEngine.playEffect(this.music, true);
    },

    // called every frame
    update: function (dt) {

    },
});