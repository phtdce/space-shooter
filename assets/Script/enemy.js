cc.Class({
    extends: require('actor'),

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._super();
    },

    onEnable() {

    },

    start() {

    },

    update(dt) {
        let deltaSpeed = this.speed.mul(dt);
        this.node.position = this.node.position.addSelf(deltaSpeed);
    },

    lateUpdate(dt){
        this.detectBoundary();
    },

    detectBoundary() {
        const RADIUS = 0;
        let screen = cc.Canvas.instance.node.getContentSize();
        let bottom = -screen.height >> 1;

        let currentPos = this.node.position;
        if (currentPos.y - RADIUS < bottom) {
            this.node.destroy();
        }
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'player bullets') {
            this.node.destroy();
        }
    }
});