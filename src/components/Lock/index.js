import React, { Component } from 'react'
import Auth0Lock from 'auth0-lock'
import { Button } from 'react-bootstrap'

const lock = new Auth0Lock(process.env.AUTH0_CLIENTID, process.env.AUTH0_DOMAIN, {
    responseType: 'token',
    params: {
        scope: 'openid'
    }
})

// Listening for the authenticated event
lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
});

const LockButton = () => {
    return(
        <div>
            <Button onClick={ lock.show() }>Login</Button>            
        </div>
    )
}

export default LockButton