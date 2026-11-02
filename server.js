
import app from './app.js';
import { connectToDatabase } from './database/connection.js';

const PORT = process.env.PORT || 3000;

try {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error('Unable to start server:', error.message);
  process.exit(1);
}
