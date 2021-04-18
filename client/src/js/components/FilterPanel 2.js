export default {
    name: "FilterPanel",

    props: ["kids"],

    template: `
        <div class="filter" :class="{ 'kids-filter' : kids }">
            <!-- <ul class="genre">         
                <li class="active"><a href="#">All Genres</a></li>  
                <li><a href="/drama" >Drama</a></li>
                <li><a href="/comedy">Comedy</a></li>
                <li><a href="#">Animation</a></li>
                <li><a href="#">Family</a></li>
                <li><a href="#">Fantasy</a></li>
            </ul> -->
            <ul class="year">
                <li :class="{active: activeYear === 'all'}"><a href="#"  id="all" @click.prevent="onClick">All Years</a></li>
                <li :class="{active: activeYear === '1990'}"><a href="#"  id="1990" @click.prevent="onClick">1990's</a></li>
                <li :class="{active: activeYear === '1980'}"><a href="#"  id="1980" @click.prevent="onClick">1980's</a></li>
                <li :class="{active: activeYear === '1970'}"><a href="#"  id="1970" @click.prevent="onClick">1970's</a></li>
                <li :class="{active: activeYear === '1960'}"><a href="#"  id="1960" @click.prevent="onClick">1960's</a></li>
                <li :class="{active: activeYear === '1950'}"><a href="#"  id="1950" @click.prevent="onClick">1950's</a></li>
                <li :class="{active: activeYear === '1940'}"><a href="#"  id="1940" @click.prevent="onClick">1940's</a></li>
                <li :class="{active: activeYear === '1930'}"><a href="#"  id="1930" @click.prevent="onClick">1930's</a></li>
            </ul>
        </div>

    `,

    data: function() {
        return {
            activeYear: "all"
        }
    },

    methods: {
        onClick(event) {
            this.activeYear = event.target.id;
            this.$emit("setfilter", {year: this.activeYear});
        }
    }
}