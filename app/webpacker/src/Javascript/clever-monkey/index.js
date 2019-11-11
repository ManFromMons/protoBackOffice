let cleverMonkey_scope = function() {
    if ( !cleverMonkey_scope.prototype.name ) {
        cleverMonkey_scope.prototype.name = !cleverMonkey_scope.prototype.name ? "cleverMonkey_scope" : cleverMonkey_scope.prototype.name;
        if ( !cleverMonkey_scope.prototype.instance ) {
            cleverMonkey_scope.prototype.instance = this ;
        }
    }
    this.createTime = Date.now();
    console.log(`New ${this.name} at ${this.createTime.toLocaleString()}`);
};
CM = new cleverMonkey_scope();
