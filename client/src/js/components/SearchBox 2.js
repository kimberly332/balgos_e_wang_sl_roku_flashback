export default {
    name: "SearchBox",

    props: ["kids"],

    template: `
    <div class="search-box" :class="{ 'kids-search-box': kids }"> 
        <form>
            <input type="text" placeholder="Search..." name="search">
            <!-- <button type="submit"><i class="fa fa-search"></i></button> -->
            <button type="text"><i class="fa fa-search"></i></button>
        </form>
    </div>
    `
}