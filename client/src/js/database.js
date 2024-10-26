import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Open the database
  const jateDb = await openDB('jate', 1);

  // Create a transaction
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open the object store
  const store = tx.objectStore('jate');

  // Add the content to the store
  const request = store.put({ id: 1, value: content });

  // Confirm the request
  const result = await request;
  console.log('Data saved to the database', result);
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all content from the database');

  // Open the database
  const jateDb = await openDB('jate', 1);

  // Create a transaction
  const tx = jateDb.transaction('jate', 'readonly');

  // Open the object store
  const store = tx.objectStore('jate');

  // Get all the data from the store
  const request = store.getAll();

  // Confirm the request
  const result = await request;
  console.log('Data retrieved from the database', result);
  return result;
};

initdb();

