module.exports = (app) => {
    app.get('/info', (req,res) => {
        res.send({info: 'Name of the author is Szymon Awruk'});
    })
}