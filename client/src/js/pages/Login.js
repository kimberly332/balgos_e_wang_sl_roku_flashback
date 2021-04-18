import FullWordsLogo from "../components/FullWordsLogo.js";
import MainFooter from "../components/MainFooter.js";

export default {
    name: "LoginPage",

    template:`
    <div class="login-bg">
        <div class="grid-container">

            <fullwordslogo></fullwordslogo>
            
            <div>
                <form @submit.prevent="onSubmit">

                    <h2>Sign in with your email</h2>
                    
                    <p id="msg">{{ displayMsg }}</p>
                    
                    <input v-model.trim="input.email" type="email" id="email" name="email" placeholder="Email *" required><br>

                    <input v-model.trim="input.password" type="password" id="password" name="password" placeholder="Password *" required><br>

                    <a href="#">Forget Password?</a>
                    
                    <input id="login-btn" type="submit" value="Sign In">
                </form>

                <!-- <p>New to Roku Flashback? <span><a href="">Sign up</a></span></p> -->
                <p>New to Roku Flashback? <span><router-link :to="{ name: 'Signup' }">Sign up</router-link></span></p>
            </div>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    data() {
        return {
            input: {
                email: "",
                password: ""
            },
            displayMsg: ""
        }
    },

    methods: {
        onSubmit() {

            // Check for valid input
            const valid = this.input.email != "" && 
                          this.input.password != "";
            if (valid) {

                const loginData = JSON.stringify({email: this.input.email, password: this.input.password});

                const url = `/ums/admin/login`;

                fetch(url, {
                    method: "POST",
                    body: loginData,
                    headers: {
                        "Accept": "application/json, text/plain, */*",
                        "Content-type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.status === "failure"){
                        console.warn("user doesn't exit, or sth else broke");
                        this.displayMsg = data.data;
                    } else { // success
                        this.$root.setAccountAuth(true, data.data.account_id);
                        localStorage.setItem("account_id", data.data.account_id);
                        this.$router.replace({name: "Profile"});
                    }
                })
                .catch((err) => console.error(err));
            } else {
                console.log("A username and/or password needs to be input");
                this.displayMsg = "Please fill out the fileds.";
            }
            
        }
    },

    components: {
        fullwordslogo: FullWordsLogo,
        mainfooter: MainFooter,
    }
}