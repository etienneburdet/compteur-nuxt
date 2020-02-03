# Compteur

A simple click counter, with as many buttons as you need. Demo [here](https://compteur-nuxt.etienneburdet.now.sh/). It's a fully installable PWA, so try it on your smartphone!

# Install
It is made to work on [Cloudant](https://www.ibm.com/cloud/cloudant) and [Now ZEIT](https://zeit.co/home). It should work on any other Couchdb and static hosting.

Create an account on both, then create a DB on Cloudant and generate an API key for it (Cloudant dashboard > dbname > permissions). 

Set the cloudant URL as a Now secret (set it in your .env for for development), replacing with your own values.
``` bash
now secret cloudant_url=https://USERNAME:PASSWORD@dburl/dbname
```
And deploy with : 
``` bash
now --prod
```
# Dev Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org), [Nuxt on Now V2](https://zeit.co/guides/deploying-nuxtjs-with-zeit-now) and [PouchDB](https://pouchdb.com/guides/).
