import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

if (!MONGODB_URI) {
  throw new Error('Missing or empty "MONGODB_URI" environment variable!');
}

if (!PORT) {
  throw new Error('Missing or empty "PORT" environment variable!');
}

export { MONGODB_URI, PORT };
