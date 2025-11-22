# Aronnax Labs Custom WordPress Development

Custom WordPress block development environment for Aronnax Labs.

## Contents

- `aronnax-labs-custom-blocks/` - Custom Gutenberg blocks plugin
- `aronnax-labs-theme/` - Custom WordPress child theme
- `docker-compose.yml` - Docker development environment

## Setup

1. Start the development environment:
```bash
docker-compose up -d
```

2. Access WordPress at http://localhost:8080

3. For block development, enter the node container:
```bash
docker-compose exec node bash
cd /app
npm install
npm start
```

## Development

- WordPress runs on port 8080
- MySQL database credentials are in docker-compose.yml (development only)
- Custom blocks are automatically mounted to the WordPress plugins directory
- Custom theme is automatically mounted to the WordPress themes directory

## Notes

This is a development environment. Database credentials in docker-compose.yml are for local development only and should never be used in production.
