import express from 'express';
import { router as UserRouter } from './Routes/user.router.js';
import { router as SongRouter } from './Routes/song.router.js';
import { router as ArtistRouter } from './Routes/artist.router.js';
import { router as InitRouter } from './Routes/init.sequelize.router.js';
import dotenv from 'dotenv';

// Henter config fra ".env"
dotenv.config();

//Her kalder vi express framework
const app = express();

// "Body data/form data" mærklig ting som man bare skal bruge
app.use(express.urlencoded({ extended: true }))

// App Settings to ensure CORS Access from browser
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

const port = process.env.PORT || 4000;

app.use(InitRouter);
app.use(UserRouter);
app.use(SongRouter);
app.use(ArtistRouter);

app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})