Vue.component('banner',{
    template: //html
    `
    <div class="banner">
            <div class="bannertit">
                <h1>{{$t("banner.title")}}</h1>
            </div>
            <div class="bannertxt">
                <p>{{$t("banner.txt")}}</p>
            </div>
            <div class="btngo">
                <a>{{$t("btn.txt")}}</a>
            </div>        
    </div>
    `,
    data() {
        return {
            
        }
    },
    methods: {
    },
})
