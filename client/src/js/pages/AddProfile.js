import FullWordsLogo from "../components/FullWordsLogo.js";
import MainFooter from "../components/MainFooter.js";

export default {
    name: "AddProfilePage",

    template: `
    <div class="addprofile-bg">
        <div class="grid-container">
            <fullwordslogo></fullwordslogo>

            <div>
                <form @submit.prevent="onSubmit">
                    <h2>Add New Profile</h2>
                    
                    
                    <div>
                        <i class="fas fa-user-circle"></i>
                        <p>Choose Your Avatar</p>
                    </div>
                    
                    <p id="msg">{{ displayMsg }}</p>

                    <div class="children">
                        <label for="check">Children? (Age)</label>
                        <input 
                            type="checkbox" 
                            id="check" 
                            v-model="input.checked"
                        >
                    </div>

                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Profile Name *" 
                        v-model="input.name"
                        required
                    ><br>

                    <input 
                        v-if="!input.checked"
                        type="text" 
                        id="pin" 
                        class="display"
                        name="pin" 
                        placeholder="6 Digits Pin *"
                        v-model="input.pin"
                        pattern="[0-9]{6}"
                        required
                    ><br>

                    <input 
                        id="login-btn" 
                        type="submit"
                        value="Continue"
                    >

                </form>
            </div>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    data: function() {
        return {
            input: {
                name: "",
                pin: "",
                checked: false
            },
            displayMsg: "",
            currAccount: localStorage.getItem("account_id")
        }

    },

    watch: {
        "input.checked": function () {
            if (this.input.checked) {
                // check kids
                this.input.pin = "";
            } 
        }
    },

    methods: {
        onSubmit() {
            
            // check for valid input

            const valid = (this.input.checked && this.input.name !== "")  ||
                          (!this.input.checked && this.input.name !== "" && this.input.pin.length === 6);
            if (valid) {
                const profileData = JSON.stringify(
                    {
                        accountID: this.currAccount, 
                        name: this.input.name, 
                        pin: this.input.pin, 
                        level: (this.input.checked? 0:1),
                        avatar: "avatar.jpg"
                    }
                );
                const url = `/ums/admin/create-profile`;

                fetch(url, {
                    method: "POST",
                    body: profileData,
                    headers: {
                        "Accept": "application/json, text/plain, */*",
                        "Content-type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.displayMsg = data.data;
                    if (data.status === "success"){
                        this.$router.push({name: "Profile"});
                    }

                })
                .catch(err => console.warn(err));
            
            } else {
                this.displayMsg ="Create profile failed: Inputs are invalid.";
            }
        }
    },

    components: {
        fullwordslogo: FullWordsLogo,
        mainfooter: MainFooter
    }
}