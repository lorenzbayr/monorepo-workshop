import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'passenger'),
])
  .catch((err) => console.log('Error loading remote entries'))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
