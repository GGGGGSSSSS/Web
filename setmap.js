const data = {};

let el = {}
let ii = {}
let uu = false
let zz = Symbol()
let gg = Symbol()

data[uu] = '333333'
data[el] = 'metadata';
data[ii] = 'metadata2';
data[zz] = 'zz'
data[gg] = 'uu'

console.log(data[el], data['[object Object]']);
// Object只接受字符串作为key data[el]会被转化为data.[object Object] 当然前面的并不能这样表达 只是内存中是这样