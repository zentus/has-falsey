const hasFalsey = array => Array.isArray(array) ? array.filter(item => !item).length > 0 : console.error(`has-falsey expected an array, got "${array}"`)

module.exports = hasFalsey
