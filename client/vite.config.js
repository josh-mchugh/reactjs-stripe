import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/products': 'http://localhost:8080',
            '/create-payment-intent': 'http://localhost:8080'
        }
    }
});
