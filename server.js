const express = require('express');
const path = require('path');
const stub = require('./stub.json');

const app = express();

const withUIDs = data =>
    data.map(item => ({
        ...item,
        uid: Math.random()
            .toString(36)
            .substring(2, 15)
    }));

app.get('/flights', async (req, res) => {
    const {
        query: { type }
    } = req;

    let flights;

    if (type === 'delayed') {
        const delayedArrivals = stub.arrivals.filter(({ arrival }) =>
            Number.isInteger(arrival.delay)
        );
        const delayedDepartures = stub.departures.filter(({ departure }) =>
            Number.isInteger(departure.delay)
        );
        const delayedFlights = [...delayedArrivals, ...delayedDepartures];
        delayedFlights.forEach(flight => flight.status = 'delayed');

        flights = withUIDs(delayedFlights);
    } else {
        flights = withUIDs(stub[type]).slice(0, 30);
    }

    return res.status(200).json(flights);
});

app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 3001;
app.listen(port, () =>
    console.log(`${process.env.NODE_ENV === 'development' ? 'api' : 'app'} listening on port ${port}`)
);
