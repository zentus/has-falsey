## has-falsey

Takes an array, returns true if it contains one or more falsey items, otherwise returns false.

### Installation
```bash
npm install --save has-falsey
```

### Usage

```javascript
import hasFalsey from 'has-falsey'

hasFalsey(['one', 'is', false])
//=> true

hasFalsey(['one', 'more', 'time'])
//=> false

hasFalsey({})
//=> Error: has-falsey expected an array, got "[object Object]". typeof: object
```

### License

This project is licensed under the [MIT License](LICENSE)
