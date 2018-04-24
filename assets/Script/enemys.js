cc.Class({
    extends: cc.Component,

    properties: {
        enemy: cc.Prefab,
        interval: 2
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onEnable() {
        this.schedule(this.spawn, this.interval);
    },

    onDisable() {
        this.unschedule(this.spawn);
    },

    spawn() {
        let enemyNode = cc.instantiate(this.enemy);
        enemyNode.active = true;
        enemyNode.parent = this.node;
        let screen = cc.Canvas.instance.node.getContentSize();

        const RADIUS = 50;
        enemyNode.x = cc.lerp(-screen.width / 2 + RADIUS, screen.width / 2 - RADIUS, Math.random());
        enemyNode.y = screen.height / 2 - RADIUS;
    }

    // update (dt) {},
});