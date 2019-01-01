const contactForm=`
  <form method="POST">
    <fieldset  id="contact-info">
      <legend>Contact</legend><br>
        Fields marked * required.<br><br>

        <label>First name *<br>
        <input type="text" name="firstname" placeholder="First Name" required></label><br><br>											
        <label>Last name *<br>
        <input type="text" name="lastname" placeholder="Last Name" required></label><br><br>
        <br>
        <div id="contactEmail">
          <label>Email *<br>
            <input style="display:inline-block" type="email" name="email" placeholder="Email Address" required>
          </label><br><br>
        </div>
        <div id="contactPhone">
          <label>SMS confirmation<br>
          <input style="display:inline-block" type="tel" name="sms" placeholder= "Phone Number"></label><br><br>
        </div>
        
        <input class="button" type="submit" value="Submit">						
    </fieldset>
    </form>`