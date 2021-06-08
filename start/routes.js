'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home').as('home')

Route.get('/posts', 'PostController.index').as('posts.index')

Route.get('/posts/add', 'PostController.add').as('posts.add')

Route.post('/posts', 'PostController.store').as('posts.store')

Route.get('/posts/:id', 'PostController.details').as('posts.details')

// Route.get('/test/:id', ({ params }) => `This is the post id of ${params.id}`)
