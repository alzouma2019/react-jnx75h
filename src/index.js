import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Timer from './timer/timer';
import Counter from './timer/counter';
import Component1 from './timer/component';

import App from './App';
import FavoriteColor from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Component1 />);
