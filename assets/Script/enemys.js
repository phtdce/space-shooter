cc.Class({
    extends: cc.Component,

    properties: {
        enemyList: {
            default: [],
            type: [cc.Prefab]
        },
        interval: 2
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onEnable() {
        this.schedule(this.spawn, this.interval);
        this.first = true;
    },

    onDisable() {
        this.unschedule(this.spawn);
    },

    spawn() {

        let enemy = this.first ? cc.instantiate(this.enemyList[1]) : cc.instantiate(this.enemyList[0]);       
        this.first = false;
        enemy.active = true;
        enemy.parent = this.node;
        let screen = cc.Canvas.instance.node.getContentSize();

        const RADIUS = 50;
        enemy.x = cc.lerp(-screen.width / 2 + RADIUS, screen.width / 2 - RADIUS, Math.random());
        enemy.y = screen.height / 2 - RADIUS;
    }

    // update (dt) {},
});