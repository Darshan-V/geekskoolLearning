import { run } from './exercise12.mjs'

run('do(define(x, 4),define(setx, fun(val, set(x, val))),setx(50),print(x))')
// → 50
run('set(quux, true)')
