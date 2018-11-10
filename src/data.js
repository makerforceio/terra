import PouchDB from 'pouchdb';

const db = new PouchDB('theplantgame');
window.db = db;

export default db;
