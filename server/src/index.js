/* eslint-disable no-console */

import app from './app';
import { config } from 'dotenv';
import { connect } from './lib/db/connection';
config();
connect();

const PORT = process.env.PORT || 7890;
app.listen(PORT, () => console.log('Running on', PORT));
