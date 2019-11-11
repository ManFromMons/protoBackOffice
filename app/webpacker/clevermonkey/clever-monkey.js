export class CleverMonkey {

    constructor() {
        if (!!CleverMonkey._singleton_instance) {
            return CleverMonkey._singleton_instance;
        }
        CleverMonkey._singleton_instance = this;
        CleverMonkey._components = {};
        CleverMonkey.createTime = Date.now();
        this._globalScope = this;

        return this;
    }

    get instanceTime() {
        return CleverMonkey.createTime.toLocaleString();
    }

    addComponent(componentName) {
    }

    get globalScope() {
        return this._globalScope;
    }

    set globalScope(clevermonkeyScope) {
        this._globalScope = clevermonkeyScope;
    }
}

const clevermonkey_scope = {
    initialise() {
        if (!clevermonkey_scope.prototype.name) {
            clevermonkey_scope.prototype.name = !clevermonkey_scope.prototype.name ? "clevermonkey_scope" : clevermonkey_scope.prototype.name;
            if (!clevermonkey_scope.prototype.instance) {
                clevermonkey_scope.prototype.instance = this;
            }
        }
        let _CleverMonkey = new CleverMonkey();
        debugger;
        _CleverMonkey.globalScope = this;
        this._CleverMonkey = _CleverMonkey;
        this.createTime = _CleverMonkey.instanceTime;
        console.log(`New ${this.name} at ${_CleverMonkey.createTime}`);
    }
};
export default clevermonkey_scope;
