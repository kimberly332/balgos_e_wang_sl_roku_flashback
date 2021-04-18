import Footer from "../components/MainFooter.js";
import MainHeader from "../components/MainHeader.js";

export default {
    name: "LandingPage",

    template: `
    <div class="landing-bg">
        <div class="grid-container">
            <mainheader></mainheader>

            <div class="welcome-message">
                <h2>Unlimited movies, TV shows, and more.</h2>
                <p>Watch anywhere. Cancel anytime.</p>
                <router-link :to="{ name: 'Login' }">Get Started</router-link>
            </div>

            <mainfooter></mainfooter>
        </div>
    </div>
    `,

    components: {
        mainfooter: Footer,
        mainheader: MainHeader
    }


}