export default {
    name: "MainFooter",

    template: `
        <p class="copyright">&copy; {{ year }} Roku Flashback All Rights Reserved.</p>
    `,

    data: function(){
        return {
            year: new Date().getFullYear()
        }
    }
}