import MainLogo from "./MainLogo.js";
import MenuSection from "./MenuSection.js";

export default {
    name: "HomeHeader",

    props: ["kids"],

    template: `
    <header class="header" :class="{ 'kids-header': kids }">
        <mainlogo></mainlogo>  
        <menusection></menusection>  
    </header>
    `,

    components: {
        mainlogo: MainLogo,
        menusection: MenuSection
    }
}