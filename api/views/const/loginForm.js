const signUpForm=`
  <em>If it is your first time, you are automatically registered and the welcome message will follow or a welcome back.</em><br><br>
        <form action="axios" method="post" name="login"></form>
          <fieldset  id="signInForm">
            <legend>Sign In</legend><br>
              Fields marked * required.<br><br>

              <label>Email*<br>
              <input type="email" name="login" placeholder="user@email.com" required></label><br><br>											
              <label>Password*<br>
              <input type="password" name="login" placeholder="Password" required></label><br><br>
              
              <input class="button" id="login" type="submit" value="Submit">
            </div>						
          </fieldset>
          </form>`