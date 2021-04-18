import HomeHeader from "../components/HomeHeader.js";
import MainFooter from "../components/MainFooter.js";

export default {
    name: "AccountDetailsPage",

    template:`
    <div class="account-bg">
        <div class="grid-container">

            <homeheader :kids="false"></homeheader>
            
            <div>
                <form>
                    <h2>Account Details</h2>
                    <div class="profile-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>       
                    <!-- <input type="text" id="name" name="name" placeholder="Username: User1"><br> -->
                    <p id="msg">{{ displayMsg }}</p>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        :placeholder="'Email: ' + currAccountEmail" 
                        class="disable-edit" 
                        :class="{'allow-edit': allowEdit}"
                        v-model.trim="input.email"
                        required
                    ><br>
                    <input 
                        type="password"
                        id="password" 
                        name="password" \
                        placeholder="Password: ******" 
                        class="disable-edit" 
                        :class="{'allow-edit': allowEdit}"
                        v-model.trim="input.password"
                    ><br>

                    <div v-if="!allowEdit">
                        <input
                            type="submit" 
                            class="edit-user-btn" 
                            name="edit"
                            value="Edit Account" 
                            @click.prevent="onClick" 
                        >
                        <input 
                            type="submit" 
                            class="edit-user-btn" 
                            name="delete"
                            value="Delete Account" 
                            @click.prevent="onClick" 
                        >
                    </div>
                    <div v-else>
                        <input
                            type="submit" 
                            class="edit-user-btn" 
                            name="done"
                            value="DONE" 
                            @click.prevent="onClick" 
                        >
                        <input 
                            type="submit" 
                            class="edit-user-btn" 
                            name="cancel"
                            value="Cancel" 
                            @click.prevent="onClick" 
                        >
                    </div>

                    <router-link :to="{ name: 'Profile' }" class="switch-account-btn">Manage Profiles</router-link>
                </form>
            </div>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    created: function() {
        const currAccountID = localStorage.getItem("account_id");
        this.getAccountInfo(currAccountID);
    },

    data: function() {
        return {
            currAccountID: localStorage.getItem("account_id"),
            currAccountEmail: "",
            allowEdit: false,

            input: {
                email: "",
                password: ""
            },
            displayMsg: ""

        }
    },

    methods: {

        async onClick(event) {

            if (event.target.name === "done") {
                
                // check empty
                if (this.input.email === "" || this.input.password === "") {
                    this.displayMsg = "Editing fails... Username and Password cannot be empty.";
                    return;
                } 

                // check password min length
                if (this.input.password.length < 6) {
                    this.displayMsg = "Editing fails... Password has a minimum length of 6.";
                    return;                   
                }

                // first check email repitation in database
                const emailData = JSON.stringify(
                    {
                        accountID: this.currAccountID, 
                        email: this.input.email
                    }
                );
                const url = `/ums/admin/check-email`;

                try{
                    const res = await fetch(url, {
                        method: "POST",
                        body: emailData,
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Content-type": "application/json",
                            "CustomHeader": "exclude/self",
                        }
                    });
                    const resData = await res.json();
                    if (resData.status === "failure") {
                        this.input.email = "";
                        this.input.password = "";
                        this.displayMsg = resData.data;
                        return;
                    } 
                } catch(err) {
                    console.log("Sth wrong when check email.");
                    console.log(err);
                }

                // finally update account
                const editAccountUrl = `/ums/admin/edit-account`;
                const accountData = JSON.stringify(
                    { 
                        accountID: this.currAccountID, 
                        email: this.input.email, 
                        password: this.input.password
                    }
                );

                try{
                    const res = await fetch(editAccountUrl, {
                        method: "POST",
                        body: accountData,
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Content-type": "application/json"
                        }
                    });
                    const resData = await res.json();
                    if (resData.status === "failure") {
                        this.input.email = "";
                        this.input.password = "";
                        this.displayMsg = resData.data;
                        return;
                    } else { // success
                        this.currAccountEmail = this.input.email;
                        this.input.email = "";
                        this.input.password = "";                        
                        this.displayMsg = resData.data;
                    }
                } catch(err) {
                    console.log("Sth wrong when edit aacount.");
                    console.log(err);
                }

            }

            if (event.target.name === "cancel") {
                this.displayMsg = "";
                this.input.email = "";
                this.input.password = "";      
            }

            if (event.target.name === "delete") {
                const deleteAccountUrl = `/ums/admin/delete-account`;
                const accountData = JSON.stringify(
                    { 
                        accountID: this.currAccountID
                    }
                );
                try{
                    const res = await fetch(deleteAccountUrl, {
                        method: "POST",
                        body: accountData,
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Content-type": "application/json"
                        }
                    });
                    const resData = await res.json();
                    if (resData.status === "failure") {
                        this.displayMsg = resData.data;
                    } else { // success
                        localStorage.clear();
                        this.$root. setAccountAuth(false, undefined);
                        this.$root.setProfileInfo(false, {});
                        this.$router.replace({ name: "Root" });
                    }
                } catch(err) {
                    console.log("Sth wrong when delete account");
                    console.log(err);
                }
            }

            // toggle 
            this.toggleEdit();
        },

        toggleEdit() {
            this.allowEdit = !this.allowEdit;
        },

        getAccountInfo(accountID) {
            const url = `/ums/admin/account/${accountID}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === "failure"){
                    console.warn("account doesn't exit, or sth else broke");
                } else { // success
                    this.currAccountEmail = data.data.account_email;
                }
            })
            .catch((err) => console.error(err));
        }
    },

    components: {
        homeheader: HomeHeader,
        mainfooter: MainFooter,
    }

}