cc.Class({
    extends: require('actor'),

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        },

        deathSound:{
            default: null,
            url: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._super();
    },

    onEnable() {
        let tracer = this.node.getComponent('tracer');
        if(tracer){
            tracer.target = G.player.node;
        }
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
            cc.audioEngine.playEffect(this.deathSound, false);
            this.node.destroy();
        }
    }
});