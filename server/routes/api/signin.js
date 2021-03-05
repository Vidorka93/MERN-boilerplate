const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = (app) => {
  //app.get('/api/counters', (req, res, next) => {
   // Counter.find()
    //  .exec()
    //  .then((counter) => res.json(counter))
    //  .catch((err) => next(err));
 // });

  //app.post('/api/counters', function (req, res, next) {
    //const counter = new Counter();

   // counter.save()
     // .then(() => res.json(counter))
    //  .catch((err) => next(err));
 // });

 /*
 *Sign up
 */
app.post('/api/account/signup', (req, res, next) => {
  const { body } = req;
  const {
    firstName,
    lastName,
    password
  } = body;
  let {
    email
  } = body;

  if (!firstName) {
    return res.end({
      succes: false,
      message: 'Error: First name cannot be blank'
    });
  }
  if (!lastName) {
    return res.end({
      succes: false,
      message: 'Error: Last name cannot be blank'
    });
  }
  if (!email) {
    return res.end({
      succes: false,
      message: 'Error: email cannot be blank'
    });
  }
  if (!password) {
     return res.end({
      succes: false,
      message: 'Error: Password cannot be blank'
    });
  }
  email = email.toLowerCase();

  //Steps:
  //1Verify email doesnt exist
  //2SAve
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.end({
        succes: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.end({
        succes: false,
        message: 'Error: Account already exist'
      });
    }

    // Save the new user
    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.end({
          succes: false,
          message: 'Error: Server error'
        });
      }
      return res.end({
        succes: true,
        message: 'Signed up'
      });
    });
  });
});

app.post('/api/account/signin', (req, res, next) => {
  const { body } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;

  if (!email) {
    return res.end({
      succes: false,
      message: 'Error: email cannot be blank'
    });
  }
  if (!password) {
     return res.end({
      succes: false,
      message: 'Error: Password cannot be blank'
    });
  }
  email = email.toLowerCase();

  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      console.log('err 2:', err);
      return res.send({
        succes: false,
        message: 'Error: server error'
      });
    }
    if (users.length != 1) {
      return res.send({
        succes: false,
        message: 'Error: Invalid'
      });
    }

    const user = users[0];
    if (!user.validPassword(password)) {
      return res.send({
        succes: false,
        message: 'Error: Invalid'
      });
    }

    //Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        console.log(err);
        return res.send({
          succes: false,
          message: 'Error: server error'
        });
      }

      return res.send({
          succes: true,
          message: 'Valid sign in',
          token: doc._id
      });
    });
  });
});

app.get('/api/account/verify', (req, res, next) => {
  //Get the token
  const { query } = req;
  const { token } = query;
  
  //Verify the token is on of a kind

  UserSession.find({
    _id: token,
    isDeleted:false
  }, (err, sessions) => {
if (err) {
  console.log(err);
  return res.send({
    succes: false,
    message: 'Error: Server error'
  });
}

if (sessions.length != 1) {
  return res.send({
    succes: false,
    message: 'Error: Invalid'
  });
}else {
  return res.send({
    succes: true,
    message: 'Good'
  });
}

  });



});
app.get('/api/account/logout', (req, res, next) => {



  //Get the token

  const { query } = req;
const { token } = query;

//Verify the token is on of a kind



UserSession.findOneAndUpdate({
  _id: token,
  isDeleted:false
}, {
  $set: {
    isDeleted:true
  }
}, null, (err, sessions) => {
if (err) {
console.log(err);
return res.send({
  succes: false,
  message: 'Error: Server error'
});
}

if (sessions.length != 1) {
return res.send({
  succes: false,
  message: 'Error: Invalid'
});
}else {
return res.send({
  succes: true,
  message: 'Good'
});
}

});



});
};