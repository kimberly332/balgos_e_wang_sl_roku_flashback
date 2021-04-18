import MainLogo from "./MainLogo.js";
import SigninSection from "./SigninSection.js";

export default {
    name: "MainHeader",

    template: `
    <header class="header black-header">
        <mainlogo to="Root"></mainlogo>
        <signinsection></signinsection>
    </header>
    `,

    components: {
        mainlogo: MainLogo,
        signinsection: SigninSection
    }

}