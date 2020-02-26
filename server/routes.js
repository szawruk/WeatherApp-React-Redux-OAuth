const passport = require('passport');

module.exports = (app) => {
    app.get('/info', (req, res) => {
        res.send({ info: 'Name of the author is Szymon Awruk' });
    });

    //auth routes
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/weather');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}