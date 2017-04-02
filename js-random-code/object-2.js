var obj = {
	0: 1234,
	34: 'prop1',
	12: 'prop2',
	'34': 'another'
}

obj[6+6] = 'prop2 modified';

console.log(Object.keys(obj));

for(var key in obj) {
	console.log('Key: ' + key + '  value: ' + obj[key]);
}