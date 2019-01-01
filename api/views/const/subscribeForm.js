
          <label>SMS confirmation<br>
          <input style="display:inline-block" type="tel" name="sms" placeholder= "Phone Number"></label><br><br>
        </div>
        
        <input class="button" type="submit" value="Submit">						
    </fieldset>
    </form>`

const subscribeForm=`
  <form method="POST">
    <fieldset  id="subscribe-info">
      <legend>Subscribe</legend><br>
        Fields marked * required.<br><br>

        <label>First name<br>
        <input type="text" name="firstname" placeholder="First Name" required></label><br><br>											
        <label>Last name<br>
        <input type="text" name="lastname" placeholder="Last Name" required></label><br><br>

        <label>Email *<br>
          <input type="text" name="email" placeholder="Email Address" required></label><br><br>

        <label>Choose Subscription Type<br><br>        
        <input type="radio" name="subscription">Free
        <input type="radio" name="subscription">Cheap
        <input type="radio" name="subscription" checked>First Born
        </label><br><br>
        
        <input class="button" type="submit" value="Submit">
      </div>						
    </fieldset>
  </form>`