import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
