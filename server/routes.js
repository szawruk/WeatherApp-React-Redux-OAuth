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
    app.post('/api/cities/:choice', async (req, res) => {

        if (req.params.choice == 'add') {
            req.user.cityList.push(req.body.city);
        }
        else if (req.params.choice == 'delete') {
            req.user.cityList = req.user.cityList.filter(city => city != req.body.city);
        }
        try {
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }

    })
}