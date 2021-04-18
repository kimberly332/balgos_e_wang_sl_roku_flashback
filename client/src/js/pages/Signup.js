import FullWordsLogo from "../components/FullWordsLogo.js";
import MainFooter from "../components/MainFooter.js";

export default {
    name: "SignupPage",

    template:`
    <div class="signup-bg">
        <div class="grid-container">
        <!-- <h3><a href="index.html"><img src="images/logo.png" alt="Roku Flashback Logo"></a></h3> -->
        <fullwordslogo></fullwordslogo>
            <div>
                <form @submit.prevent="onSubmit">
                    <h2>Create Account</h2>
                    
                    <p id="msg">{{ displayMsg }}</p>
                    <!-- <input type="text" id="name" name="name" placeholder="Name *" required><br> -->
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email *" 
                        required
                        v-model.trim="input.email" 
                    ><br>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password *" 
                        minlength="6" 
                        required
                        v-model.trim="input.password" 
                    ><br>
                    <!-- <input v-model.trim="input.confirmPassword" type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password *"  oninvalid="setCustomValidity('123')" required><br> -->
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        placeholder="Confirm Password *" 
                        minlength="6" 
                        required
                        v-model.trim="input.confirmPassword" 
                    ><br>
                    <input 
                        type="text" 
                        id="pin" 
                        name="pin" 
                        placeholder="Pin (6 digits) *" 
                        pattern="[0-9]{6}"
                        required
                        v-model.trim="input.pin" 
                    ><br>
                    
                    <input id="login-btn" type="submit" value="Continue">
                </form>
            </div>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    data: function() {
        return {
            input: {
                email: "",
                password: "",
                confirmPassword: "",
                pin: ""
            },
            displayMsg: "",
            
        }
    },

    watch: {
        "input.password": function () {
            if (this.input.password !== this.input.confirmPassword) {
                this.displayMsg = "Passwords are unmatched!";
                this.debouncedMatch();
            } else {
                this.displayMsg = "Matched!";
                this.debouncedMatch();
            }
        },
        "input.confirmPassword": function () {
            if (this.input.password !== this.input.confirmPassword) {
                this.displayMsg = "Passwords are unmatched!";
                this.debouncedMatch();
            } else {
                this.displayMsg = "Matched!";
                this.debouncedMatch();
            }
        }
    },

    created: function () {
        this.debouncedMatch = this.debounce(this.match, 1500)
    },

    methods: {
        onSubmit() {

            // password validation
            if (this.input.password !== this.input.confirmPassword) {
                this.displayMsg = "Create account failed: Passwords are unmatched!";
                return;
            }
            // check for valid input

            const valid = this.input.email != "" && 
                          this.input.password != "" && 
                          this.input.confirmPassword != "" && 
                          this.input.pin != "" && 
                          this.input.password.length >= 6 &&
                          this.input.confirmPassword.length >= 6 &&
                          this.input.pin.length === 6;
            if (valid) {

                let accountID = undefined;

                // first check email repitation in database
                const emailData = JSON.stringify({email: this.input.email});
                const url = `/ums/admin/check-email`;

                fetch(url, {
                    method: "POST",
                    body: emailData,
                    headers: {
                        "Accept": "application/json, text/plain, */*",
                        "Content-type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "failure"){
                        this.displayMsg = data.data;
                        throw new Error("User email have been already taken, or sth else broke");
                    } else { // success

                        const createAccountUrl = `/ums/admin/create-account`;
                        const accountData = JSON.stringify({email: this.input.email, password: this.input.password});
                        return fetch(createAccountUrl, {
                            method: "POST",
                            body: accountData,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-type": "application/json"
                            }
                        });
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "failure"){ 
                        this.displayMsg = data.data;
                        throw new Error("Create account fails, or sth else broke");
                    } else { // success

                        accountID = data.data.account_id;

                        this.displayMsg = "Create account successfully!";
                        // const name = this.input.email.split("@")[0];
                        const profileData = JSON.stringify(
                            { 
                                accountID: accountID, 
                                name:  this.input.email.split("@")[0], 
                                pin: this.input.pin, 
                                level: 1, 
                                avatar: "unknown.jpg"
                            }
                        );
                        const createProfileUrl = `/ums/admin/create-profile`;
                        return fetch(createProfileUrl, {
                            method: "POST",
                            body: profileData,
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Content-type": "application/json"
                            }
                        });
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "failure") {
                        this.displayMsg = data.data;
                    } else { // success
                        this.displayMsg = "Create account successfully!";

                        this.$root.setAccountAuth(true, accountID);
                        localStorage.setItem("account_id", accountID);
                        this.$router.replace({name: "Profile"});
                    }
                })
                .catch((err) => console.warn(err));
            } else {
                this.displayMsg ="Create account failed: Inputs cannot be empty.";
            }
        },

        match: function () {
            this.displayMsg = "";
        },

        debounce: function(fn, delay) {
            let timer = null;
        
            return function() {
                if (timer) {
                    clearTimeout(timer);
                }
                
                timer = setTimeout(() => {
                    fn.apply(this); 
                    timer = null;
                }, delay);
            }
        }
    },

    components: {
        fullwordslogo: FullWordsLogo,
        mainfooter: MainFooter,
    }
}