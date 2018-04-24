let Bullet = require('bullet');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        G.bullets = this;
        this.pool = new cc.NodePool('bullet');
        this.bullets = [];
    },

    add(prefab, position) {
        let bulletNode = this.pool.get();
        if (!bulletNode) {
            bulletNode = cc.instantiate(prefab);
        }

        bulletNode.active = true;
        let bullet = bulletNode.getComponent('bullet');
        this.bullets.push(bullet);

        // convert position to local space
        position.subSelf(this.node.parent.position);
        bullet.node.position = position;
        // add to scene
        bullet.node.parent = this.node;
    },

    remove(bullet) {
        bullet.node.active = false;
        cc.js.array.remove(this.bullets, bullet);
        this.pool.put(bullet.node);
    },

    update(dt) {
        let screenSize = cc.Canvas.instance.node.getContentSize();
        let top = screenSize.height >> 1;
        let bottom = -top;
        let right = screenSize.width >> 1;
        let left = -right;

        let bullets = this.bullets;
        for(let i = 0; i < bullets.length; i++){
            let bullet = bullets[i];
            let bulletPos = bullet.node.position;
            bulletPos.addSelf(bullet.speed.mul(dt));

            let outScreen = bulletPos.x < left || bulletPos.x > right || bulletPos.y < bottom || bulletPos.y > top;
            if(outScreen){
                this.remove(bullet);
                continue;
            }

            bullet.node.position = bulletPos;
        }

    },
});