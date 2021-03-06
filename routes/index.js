
const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Travel page. */
router.get('/travel', function(req, res, next) {
  res.render('travel');
});


/* POST Email Form */
router.post('/contact', function(req, res, next){
    const msg = {
         to: 'alaa.moussa2018@gmail.com',
         from: req.body.name + '<'+ req.body.email +'>',
         subject: 'My Website - New Message',
          text: req.body.message
          };
          
    sgMail.send(msg);
    // add flash message
    req.flash('success', 'Thanks a lot for your message. I will write back to you within 24 hours. Have a great day!')
    res.redirect("/")
})

module.exports = router;
