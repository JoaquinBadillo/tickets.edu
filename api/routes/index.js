const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'Ticketing API' });
});

module.exports = router;