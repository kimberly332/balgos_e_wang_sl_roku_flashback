// BASIC
import LandingPage from "../pages/Landing.js";
import LoginPage from "../pages/Login.js";
import SignupPage from "../pages/Signup.js";

// PROFILE
import ProfilePage from "../pages/Profile.js";
import ManageProfilePage from "../pages/ManageProfile.js";
import AddProfilePage from "../pages/AddProfile.js";
import ProfileDetailsPage from "../pages/ProfileDetails.js";

// ACCOUNT
import AccountDetailsPage from "../pages/AccountDetails.js";

// ADULT HOME
import HomePage from "../pages/Home.js";

// KIDS HOME
import KidsPage from "../pages/Kids.js";

// ADULT + KIDS
import MediaPage from "../pages/Media.js";
import MediaDetailsPage from "../pages/MediaDetails.js";

const routes = [
    { 
        path: "/", 
        name: "Root", 
        component: LandingPage
    },
    { 
        path: "/login", 
        name: "Login", 
        component: LoginPage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next();
            } else {
                next("/browse");
            }
        }
    },
    { 
        path: "/signup", 
        name: "Signup", 
        component: SignupPage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next();
            } else {
                next("/browse");
            }
        }
    },
    { 
        path: "/browse", 
        name: "Profile", 
        component: ProfilePage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    { 
        path: "/ManageProfiles", 
        name: "ManageProfiles", 
        component: ManageProfilePage, 
        props: true,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    { 
        path: "/AddProfile", 
        name: "AddProfile", 
        component: AddProfilePage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    { 
        path: "/ProfileDetails", 
        name: "ProfileDetails", 
        component: ProfileDetailsPage, 
        props: true,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    { 
        path: "/home", 
        name: "Home", 
        component: HomePage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else if (localStorage.getItem("profile_level") === null || localStorage.getItem("profile_level") === "0") {
                next("/browse");
            } else {
                next();
            }
        }
    },
    { 
        path: "/kids", 
        name: "Kids", 
        component: KidsPage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else {
                next();
            }
        }
    },
    { 
        path: "/:whichHome/:media", 
        name: "Media", 
        component: MediaPage,
        props: true,
        beforeEnter: (to, from, next) => {

            if (to.params.whichHome !== "home" && to.params.whichHome !== "kids") {
                next(from.path);
            }

            if (to.params.media !== "movies" && to.params.media !== "tvshows" && to.params.media !== "music") {
                next(from.path);
            }

            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else if (localStorage.getItem("profile_level") === null) {
                next("/browse");
            } else if (localStorage.getItem("profile_level") === "0" && to.params.whichHome === "home") {
                next("/browse");
            } else {
                next();
            }
        }
    },
    { 
        path: "/:whichHome/:media/:id",  
        name: "MediaDetails", 
        component: MediaDetailsPage,
        props: true,
        beforeEnter: (to, from, next) => {

            if (to.params.whichHome !== "home" && to.params.whichHome !== "kids") {
                next(from.path);
            }

            if (to.params.media !== "movies" && to.params.media !== "tvshows" && to.params.media !== "music") {
                next(from.path);
            }
            
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else if (localStorage.getItem("profile_level") === null) {
                next("/browse");
            } else if (localStorage.getItem("profile_level") === "0" && to.params.whichHome === "home") {
                next("/browse");
            } else {
                next();
            }
        },
    },
    { 
        path: "/AccountDetails", 
        name: "AccountDetails", 
        component: AccountDetailsPage,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("account_id") === null) {
                next("/login");
            } else if (localStorage.getItem("profile_level") === null) {
                next("/browse");
            } else if (localStorage.getItem("profile_level") === "0") {
                next(from.path);
            } else {
                next();
            }
        }
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/"
    }
];

const router = new VueRouter({
    routes
});    

export default router;