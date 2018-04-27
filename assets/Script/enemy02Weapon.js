cc.Class({
    extends: cc.Component,

    properties: {
        bullet: {
            default: null,
            type: cc.Prefab
        },
        interval: 0.6
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    onEnable() {
        this.schedule(this.fire, this.interval);
    },

    onDisable() {
        this.unschedule(this.fire);
    },

    fire() {
        let leftBulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(-33, -33));
        let rightBulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(33, -33));

        this.add(leftBulletPos);
        this.add(rightBulletPos);
    },

    add(bulletPos){
        let bulletNode = cc.instantiate(this.bullet);
        bulletNode.active = true;
        bulletPos.subSelf(this.node.parent.position);
        bulletNode.position = bulletPos;
        bulletNode.parent = this.node;
    },



    // update (dt) {},
});