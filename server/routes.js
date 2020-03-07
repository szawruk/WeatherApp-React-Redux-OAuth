const passport = require('passport');
const axios = require('axios');
const keys = require('./config/keys');
const fs = require('fs');

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

    //weather
    app.post('/api/weather_5days', async (req, res) => {
        let key = '';
        let witness = false;
        let locationKey = '';
        for (let i = 1; i < 4; i++) {
            key = 'weatherKey' + i;
            locationKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${keys[key]}&q=${req.body.city}`)
                .catch(error => {
                    witness = true;
                })
            if (witness == false) break;
            if (i === 3) {
                res.status(503).send('503');
            }
            witness = false;
        }
        const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey.data[0].Key}?apikey=${keys[key]}&details=true`)
        res.send(response.data);

    })

    app.post('/api/weather_12hours', async (req, res) => {
        let key = '';
        let witness = false;
        let locationKey = '';
        for (let i = 1; i < 4; i++) {
            key = 'weatherKey' + i;
            locationKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${keys[key]}&q=${req.body.city}`)
                .catch(error => {
                    witness = true;
                })
            if (witness == false) break;
            if (i === 3) {
                res.status(503).send('503');
            }
            witness = false;
        }
        const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey.data[0].Key}?apikey=${keys[key]}&details=true`);
        res.send(response.data);
    })

    app.post('/api/weather_current', async (req, res) => {
        let key = '';
        let witness = false;
        let locationKey = '';
        for (let i = 1; i < 4; i++) {
            key = 'weatherKey' + i;
            locationKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${keys[key]}&q=${req.body.city}`)
                .catch(error => {
                    witness = true;
                })
            if (witness == false) break;
            if (i === 3) {
                res.status(503).send('503');
            }

            witness = false;
        }
        const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey.data[0].Key}?apikey=${keys[key]}&details=true`);
        res.send(response.data);

    })

    app.post('/api/city', async (req, res) => {
        let key = '';
        let witness = false;
        let locationKey = '';
        for (let i = 1; i < 4; i++) {
            key = 'weatherKey' + i;

            locationKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${keys[key]}&q=${req.body.city}&language=en`)
                .catch(error => {
                    witness = true;
                })
            if (witness == false) break;
            if (i === 3) {
                res.status(503).send('503');
            }
            witness = false;
        }

        if (locationKey.data[0]) res.status(200).send('found');
        else res.status(404).send('not foundtt');
    })
}