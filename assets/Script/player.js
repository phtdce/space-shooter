cc.Class({
    extends: require('actor'),

    properties: {
        maxSpeed: 10,
        flame: {
            default: null,
            type: cc.Node
        },
        weapon: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._super();
        G.player = this;
        this._tmpPos = this.node.position;

        let _this = this;
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            let touches = event.getTouches();
            let moving = touches[0].getDelta();
            _this._tmpPos.addSelf(moving);
        });

        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this._tmpPos = _this.node.position;
        });
    },

    start() {

    },

    update(dt) {
        let currentPos = this.node.position;
        let delta = this._tmpPos.sub(currentPos);
        let distance = delta.magSqr();

        let maxSpeedPerFrame = this.maxSpeed * dt;
        if (distance > maxSpeedPerFrame * maxSpeedPerFrame) {
            delta.normalizeSelf();
            delta.mulSelf(maxSpeedPerFrame);
        }

        //move
        this.node.position = this.node.position.add(delta);

        //keep the ship in screen
        let screen = cc.Canvas.instance.node.getContentSize();
        this.node.x = cc.clampf(this.node.x, -screen.width / 2, screen.width / 2);
        this.node.y = cc.clampf(this.node.y, -screen.height / 2, screen.height / 2);
    },
});