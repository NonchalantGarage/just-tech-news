const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


router.get('/', (req,res)=>{
    // .handlebars in homepage.handlebars is implied 
    res.render('homepage',{
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebar Docs',
        created_at: new Date(),
        vote_count: 10,
        comments: [{},{}],
        user: {
            username: 'test user'
        }
    })
});

module.exports = router