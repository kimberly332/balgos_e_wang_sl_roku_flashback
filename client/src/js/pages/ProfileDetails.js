import FullWordsLogo from "../components/FullWordsLogo.js";
import MainFooter from "../components/MainFooter.js";

export default {
    name: "ProfileDetailsPage",

    props: {
        profile: Object
    },

    template: `
    <div class="manageprofile-bg">
        <div class="grid-container">
            <fullwordslogo></fullwordslogo>

            <div>
                <form>
                    <h2>Profile Details</h2>

                <div>
                    <i class="fas fa-user-circle"></i>
                    <p>Edit Your Avatar</p>
                </div>

                <p id="msg">{{ displayMsg }}</p>

                <input type="text" id="name" name="name" :placeholder="'Name: '+ displayName" v-model="input.name"><br>

                <select v-model="input.level">
                    <option value="1">Adult</option>
                    <option value="0">Child</option>
                </select>
                
                <input v-if="input.level==='1'" type="text" id="pin" class="display hidden" name="pin" placeholder="6-Digit Pin: ******" pattern="[0-9]{6}" v-model="input.pin"><br>
                
                <input id="login-btn" name="done" type="submit" value="DONE" @click.prevent="onClick">
                <a id="delete-btn" href="#">Delete Profile</a>
                </form>
            </div>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    created: function() {
        if (this.profile === undefined) {
            this.$router.replace({name: "Profile"});
        }
    },

    data: function() {
        return {
            input: {
                name: "",
                level: this.profile.profile_level.toString(),
                pin: ""
            },
            displayMsg: "",
            displayName: this.profile.profile_name
        }
    },

    methods: {
        onClick(event) {
            if (event.target.name === "done") {
                
                // check empty
                if (this.input.name === "" || (this.input.level === "1" && this.input.pin === "")) {
                    this.displayMsg = "Editing fails... name and/or pin cannot be empty.";
                    return;
                }

                // check pin
                if (this.input.level === "1" && (this.input.pin.length !== 6 || this.input.pin.match(/^[0-9]+$/) === null)) {
                    this.displayMsg = "Editing fails... pin is invalid.";
                    return;
                }               

                const profileData = JSON.stringify(
                    {
                        profileID: this.profile.profile_id,
                        name: this.input.name,
                        level: this.input.level,
                        pin: this.input.pin,
                        avatar: "avatar.jpg"
                    }
                );

                const url = `/ums/admin/edit-profile`;
                
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
                        this.displayName = this.input.name;
                        this.input.name = "";
                        this.input.pin = "";
                    } else {
                        this.input.name = "";
                        this.input.pin = "";
                        this.level = this.profile.profile_level;
                    }

                })
                .catch(err => console.warn(err));
            }
            if (event.target.name === "delete") {
                console.log("delete");
                const deleteProfileUrl = `/ums/admin/delete-profile`;
                const profileData = JSON.stringify(
                    { 
                        profileID: this.profile.profile_id
                    }
                );
                fetch( deleteProfileUrl, {
                    method: "POST",
                    body: profileData,
                    headers: {
                        "Accept": "application/json, text/plain, */*",
                        "Content-type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.$router.replace({name: "Profile"});
                });
            }
        }
    },

    components: {
        fullwordslogo: FullWordsLogo,
        mainfooter: MainFooter,
    }

}