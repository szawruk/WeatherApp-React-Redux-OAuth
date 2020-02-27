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
        res.redirect('/');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    //addCity route
    app.post('/api/cities', async (req, res) => {
        try {
            req.user.cityList.push(req.body.city);
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }

    })
}