const fs = require('fs');
let src = new Uint8Array(fs.readFileSync('./test.wasm'));
const env = {
    memoryBase: 0, tableBase: 0, memory: new WebAssembly.Memory({
        initial: 256
    }), table: new WebAssembly.Table({
        initial: 2, element: 'anyfunc'
    }), abort: () => {
        throw 'abort';
    }
}
WebAssembly.instantiate(src, {env: env})
    .then(result => {
        // console.log(result.instance.exports)
        console.log(result.instance.exports.add(11, 33));

        console.log(result.instance.exports.call_with_string(1,2,"Hello WebAssembly",100))
    })
    .catch(e => console.log(e));
