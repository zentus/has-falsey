const hasFalsey = input => {
	if (Array.isArray(input)) {
		return Boolean(input.find(item => !item))
	}
	throw new Error(`has-falsey expected an array, got "${input}". typeof: ${typeof input}`)
}

module.exports = hasFalsey
