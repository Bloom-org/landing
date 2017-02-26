# Plantstove landing page

Built from : https://github.com/leemunroe/motherplate

### Running tasks

- run for dev: `grunt`
- build assets etc for production: `grunt build`

### Notes

- because we are using grunt - heroku and grunt don't play nice together, we have to manually do a `grunt build` to get a dist directory that will 'just work' on heroku. Long story. This is the quickest way to do this and get deployed.
