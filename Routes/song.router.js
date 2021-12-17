import express from "express";
import { Sequelize } from "../Config/db.suquelize.js";

const router = express.Router()

import SongModel from '../Models/song.model.js'
import ArtistModel from '../Models/artist.model.js'


router.get('/api/song', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch (err) {
        res.send(err)
    }
})


export { router }