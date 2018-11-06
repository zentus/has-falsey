const hasFalsey = input => {
	if (Array.isArray(input)) {
		return !!input.filter(item => !item).length
	}
	throw new Error(`has-falsey expected an array, got "${input}". typeof: ${typeof input}`)
}

module.exports = hasFalsey
