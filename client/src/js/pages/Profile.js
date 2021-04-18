import FullWordsLogo from "../components/FullWordsLogo.js";
import MainFooter from "../components/MainFooter.js";
import ProfileCard from "../components/ProfileCard.js";
import AddProfileCard from "../components/AddProfileCard.js";

export default {
    name: "ProfilePage",

    template:`
    <div class="profile-bg">
        <div class="grid-container">
            <fullwordslogo></fullwordslogo>

            <!-- Profiles Section -->
            <div v-if="!pinpad.toggle">
                <h2>Who is watching?</h2>

                <profilecard v-for="p in profiles" :key="p.profile_id" :profile="p" @pinpad="openPinpad"></profilecard>

            </div>
            
            <router-link v-if="!pinpad.toggle" :to="{ name: 'ManageProfiles', params: { profiles: profiles } }" class="manage-profile-btn">Manage Profile(s)</router-link>

            <!-- Pinpad Section -->
            <form v-if="pinpad.toggle" class="pin-pad" @submit.prevent="onSubmit">
                <h2>Hello, {{ pinpad.profileName }}!</h2>
                <i class="fas fa-user-circle"></i>
                <p>Please enter your 6 digits pin.</p>

                <input type="text" id="pin" name="pin" pattern="[0-9]{6}" v-model="pinpad.inputPin" required><br>
                <p id="msg">{{ pinpad.displayMsg }}</p>
                <input id="login-btn" name="done" type="submit" value="DONE"><br>
                

                <a class="back-btn" href="#" @click.prevent="onClickBack">Back</a>
            </form>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    created: function() {
        const currAccount = localStorage.getItem("account_id");
        this.getAllProfiles(currAccount);
    },  

    data: function() {
        return {
            currAccount: localStorage.getItem("account_id"),
            profiles: [],
            pinpad: {
                toggle: false,
                profileName: "",
                profileId: undefined,
                inputPin: "",
                displayMsg: ""
            }

        }
    },

    methods: {
        getAllProfiles(accountID) {
            const url = `/ums/admin/profiles/${accountID}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === "failure"){
                    console.warn("user doesn't exit, or sth else broke");
                    // this.displayMsg = data.data;
                } else { // success
                    this.profiles = data.data;
                    this.$root.allProfiles = data.data;
                }
            })
            .catch((err) => console.error(err));
        },

        checkPin(id, pin) {
            const profileData = JSON.stringify(
                {
                    profileID: id,
                    pin: pin,
                }
            );

            const url = `/ums/admin/check-profile-pin`;

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
                if (data.status === "success"){
                    localStorage.setItem("profile_id", this.pinpad.profileId);
                    localStorage.setItem("profile_level", 1);
                    this.$root.setProfileInfo(true, {profile_id: this.pinpad.profileId, 
                        profile_name: this.pinpad.profileName, 
                        profile_level: 1});
                    this.$router.push({name: "Home"});
                } else { 
                    this.pinpad.displayMsg = data.data;
                }

            })
            .catch(err => console.warn(err));
        },

        onSubmit() {
            // check pin
            if (this.pinpad.inputPin.length !== 6 || this.pinpad.inputPin.match(/^[0-9]+$/) === null) {
                this.displayMsg = "Pin is invalid.";
                return;
            }         
            
            this.checkPin(this.pinpad.profileId, this.pinpad.inputPin);
        },

        openPinpad(profile) {
            this.pinpad.toggle = true;
            this.pinpad.profileName = profile.profile_name;
            this.pinpad.profileId = profile.profile_id;
        },

        onClickBack() {
            this.pinpad.toggle = false;
            this.pinpad.profileName = "";
            this.pinpad.profileId = undefined;
            this.pinpad.inputPin = "";
            this.pinpad.displayMsg = "";
        }
    },

    components: {
        fullwordslogo: FullWordsLogo,
        mainfooter: MainFooter,
        profilecard: ProfileCard,
        addprofilecard: AddProfileCard
    }
}