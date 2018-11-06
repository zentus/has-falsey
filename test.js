const should = require('should/as-function')
const hasFalsey = require('./index.js')

const A = ['a', 'b', 'c', 0]
const B = ['a', 'b', 'c', false]
const C = ['a', 'b', 'c', '']
const D = [undefined]
const E = ['']
const F = [false]

const G = ['a', 'b', 'c', []]
const H = ['a', 'b', 'c', true]
const I = ['a', 'b', 'c', {}]
const J = ['a', 'b', 'c', () => {}]
const K = []

const L = {}
const M = ''
const N = false
const O = () => {}

should(hasFalsey(A)).be.true()
should(hasFalsey(B)).be.true()
should(hasFalsey(C)).be.true()
should(hasFalsey(D)).be.true()
should(hasFalsey(E)).be.true()
should(hasFalsey(F)).be.true()

should(hasFalsey(G)).be.false()
should(hasFalsey(H)).be.false()
should(hasFalsey(I)).be.false()
should(hasFalsey(J)).be.false()
should(hasFalsey(K)).be.false()

should(() => hasFalsey(L)).throw('has-falsey expected an array, got "[object Object]". typeof: object')
should(() => hasFalsey(M)).throw('has-falsey expected an array, got "". typeof: string')
should(() => hasFalsey(N)).throw('has-falsey expected an array, got "false". typeof: boolean')
should(() => hasFalsey(O)).throw('has-falsey expected an array, got "() => {}". typeof: function')
