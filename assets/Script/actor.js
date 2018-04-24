cc.Class({
    extends: cc.Component,

    properties: {
        maxHp: 1,
        hp: 1
    },

    // LIFE-CYCLE CALLBACKS:

    onEnable() {
        this.hp = this.maxHp;
    },

    onLoad() {
        this.sprite = this.getComponent(cc.Sprite);
    },

    start() {

    },

    // update (dt) {},
});