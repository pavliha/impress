import path from 'path'

export default {

  directories: {
    root: path.resolve('../', __dirname),
    providers: path.resolve('../providers', __dirname),
  },

  providers: [
    '@adonisjs/core/build/providers/AppProvider'
  ],

  aliases: {
    Express: 'Providers/Express'
  }

}
