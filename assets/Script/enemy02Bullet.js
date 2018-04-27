cc.Class({
    extends: require('bullet'),

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.scaleSpeed = 0.01;
        this.bigger = false;
    },

    onEnable() {
        let sprite = this.node.getComponent(cc.Sprite);
        sprite.node.rotation += 180;
        cc.audioEngine.playEffect(this.sound, false);
    },

    update(dt) {
        //scale the bullet
        let currentScale = this.node.getScale()
        if (currentScale <= 1) {
            this.bigger = true;
        } else if (currentScale >= 2) {
            this.bigger = false;
        }

        if (this.bigger) {
            currentScale += this.scaleSpeed;
        } else {
            currentScale -= this.scaleSpeed;
        }

        this.node.setScale(currentScale);

        let bulletPos = this.node.position;
        bulletPos.addSelf(this.speed.mul(dt));

        let screenSize = cc.Canvas.instance.node.getContentSize();
        let top = screenSize.height >> 1;
        let bottom = -top;
        let right = screenSize.width >> 1;
        let left = -right;

        let outScreen = bulletPos.x < left || bulletPos.x > right || bulletPos.y < bottom || bulletPos.y > top;
        if (outScreen) {
            this.node.destroy();
            return;
        }

        this.node.position = bulletPos;
    }
});