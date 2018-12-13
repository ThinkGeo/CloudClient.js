var base = new T.BaseClient('s', 'd');
var color = new T.ColorClient('cc', 'dd');

console.log(base);
var clientId = base.ClientId;
var clientSecret = base.ClientSecret;

console.log(clientId);
console.log(clientSecret);

console.log('color', color);
console.log('color.clientId---', color.clientId);
console.log('color.clientSecret---', color.clientSecret);