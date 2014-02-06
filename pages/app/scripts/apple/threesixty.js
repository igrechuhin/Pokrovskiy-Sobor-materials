threeSixty = {
    init: function() {
        this._vr = new AC.VR('viewer', 'images/3d/Pokrov_3d0###.jpg', 241, {
            invert: true,
            spinnable: false
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_vr");
    },
    shouldCache: function() {
        return false;
    }
};
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        threeSixty.init();
    }, false);
}
