Vue.component('headers',{
    template: //html
    `
    <div id="headers">
        <header>
            <div class="head">
                <div class="iconmenu">
                    <div><img v-if="btnopen" @click="upmenu"             src="/images/open.svg">
                    </div>
                    <div><img v-if="btnclose" @click="downmenu"          src="/images/close.svg">
                    </div>
                </div>
                <transition name="fade">
                    <div class="mobmenu" v-if="btnclose">
                        <nav>
                            <ul>
                                <li>{{$t("menu.home")}}</li>
                                <li>{{$t("menu.services")}}</li>
                                <li>{{$t("menu.weare")}}</li>
                                <li>{{$t("menu.contact")}}</li>
                                <div class="idiomenu">
                                    <li v-if="enidiom" id="ien"></li>
                                    <li v-if="esidiom" id="ies"></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </transition>
                
                <div class="staticmenu">
                    <!-- <router-link to="/">
                        <a>Home</a>
                    </router-link> -->
                </div>
            </div>
            
        </header>
        
    </div>
    `,
    data() {
        return {
            btnopen:true,btnclose:false,
            enidiom:true,
            esidiom:false,
        }
    },
    methods: {
        upmenu(){this.btnopen=false,this.btnclose=true;},
        downmenu(){this.btnopen=true,this.btnclose=false;}
    },
})