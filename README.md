# apollo_website

## Project setup
```
cd into root directory
npm install
```

```
cd backend
npm install

in "backend/config/db.js and config.json" input your database information

after installing input in the terminal "npx sequelize-cli db:migrate"
to run backend input in the terminal "node server.js"

in "root/src/apiConfig.js" input the ip of the backend at export const BACKEND_API_URL = 'http://localhost:5000';

```



### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
