import app from './app'

app.listen(app.get('port'))
console.log('Escuchando en el puerto', app.get('port'));