cc.Class({
    extends: require('enemy'),

    properties: {
    },

    onEnable(){
        let tracer = this.node.getComponent('tracer');
        if(tracer){
            tracer.target = G.player.node;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
