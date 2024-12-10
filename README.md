# Morning News Backend 🗞️

## Overview 🔍

Built with ***Node.js*** and a ***MongoDB*** database, the ***Morning News backend*** serves as the core engine of the Morning News platform. It provides ***RESTful APIs*** for delivering curated news content to users and powers all data-fetching, processing, and storage operations.

## Installation ⚙️
### With yarn
1. Ensure npm is installed on your system.
2. Install Yarn and project dependencies
```sh
npm install yarn
yarn install
```
### Environment Variables
You must configure the following mandatory environment variables in a .env file:

| KEY                 | comment                                               |
|---------------------|-------------------------------------------------------|
| `CONNECTION_STRING` | MongoDB connection string for the database            |
| `NEWS_API_KEY`      | API key provided by the News API for authentication   |

An example configuration is provided in the `.env.example` file.

## Usage 🚀
To run the server locally do:
```sh
yarn start
```

## Docker 🐋
- To run the server with Docker:
```sh
# Build the image
docker build -t morning-news-backend-image .

# Run the container
docker run -p 3000:3000 morning-news-backend-image
```

## Contributing 👩‍🚀
To contribute:

- Clone this repository.
- Contact us to request merge permissions.
- Submit your changes through a Merge Request.

## Support 💁
For support, contact us at the following email addresses:

Arnaud: [📧 arno.adam@gmail.com](mailto:arno.adam@gmail.com)

Alysia: [📧 forde.alysia@gmail.com](mailto:forde.alysia@gmail.com)

Mihamina: [📧 r.miham@yahoo.com](mailto:r.miham@yahoo.com)

## Authors ✍️
- [Arnaud](https://gitlab.com/arno.adam)

- [Alysia](https://gitlab.com/forde.alysia)

- [Mihamina](https://gitlab.com/mihamieat)

## License 📜
This project is proprietary. All rights reserved.
