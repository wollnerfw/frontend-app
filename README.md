# React + Vite Template Example Web Application
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. 
This will install and run a local server for the frontend application - but requires the corresponding backend application to run in order to fully function.

## To install and run:
For Unix based systems (be sure you have node 18+ installed):
```sh
npm install
npm run dev
```

## Troubleshooting
### Backend Application Required
If the corresponding backend application is not running, you will get a message similar to the following:
```sh
1:15:16 PM [vite] http proxy error: /api/notes
Error: socket hang up
```
The Be sure run the backend application to avoid this issue.

### Localhost Server Location
By default, the application will run on port 5173 locally (http://localhost:5173/).