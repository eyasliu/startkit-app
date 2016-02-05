import superagent from 'superagent-defaults';
const request = superagent();

request.set('Authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'))

module.exports = request;