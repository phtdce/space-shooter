cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Node
        },
        velocity: 5,
        angleVelocity: 10
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update (dt) {
        if(!this.target || !this.target.active){
            return;
        }

        // if the target is higher than enemy
        if(this.target.position.y > this.node.position.y){
            return;
        }

        let targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let targetPosInLocal = this.node.parent.convertToNodeSpaceAR(targetPos);
        let currentPos = this.node.position;

        let expectedDir = targetPosInLocal.sub(currentPos).normalizeSelf();
        let currentDir = this.getDirection();

        let left = currentDir.cross(expectedDir) > 0;
        if(left){
            this.node.rotation += this.angleVelocity * dt;
        }else{
            this.node.rotation -= this.angleVelocity * dt;
        }

        //move
        let speed = this.getDirection().mul(this.velocity * dt);
        this.node.position = currentPos.add(speed);

    },

    getDirection() {
        let degree = -this.node.rotation;
        let downVector = new cc.Vec2(0, -1);
        return downVector.rotateSelf(degree * Math.PI / 180);
    }
});