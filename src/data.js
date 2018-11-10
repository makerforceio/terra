import PouchDB from 'pouchdb';

const playerDB = new PouchDB('theplantgame_player');
const plantsDB = new PouchDB('theplantgame_plants');

window.playerDB = playerDB; // For debugging
window.plantsDB = plantsDB;

export default {
	playerDB,
	plantsDB,
};
