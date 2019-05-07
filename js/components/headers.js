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
                    <nav>
                        <ul>
                            <li><a>{{$t("menu.home")}}</a></li>
                            <li><a>{{$t("menu.services")}}</a></li>
                            <li><a>{{$t("menu.weare")}}</a></li>
                            <li><a>{{$t("menu.contact")}}</a></li>
                            <li @click="showModalidiom = true"><i class="fas fa-globe-americas"></i></li>
                        </ul>
                    </nav>
                    <transition name="fade">
                        <div class="overlay" v-if="showModalidiom"      @click="showModalidiom = false">
                        </div>
                    </transition>
                    <transition name="bounce">
                        <div class="modalidiom"                     v-if="showModalidiom">
                            <div>
                                <i @click="showModalidiom = false" class="far fa-times-circle">
                                </i>
                            </div>
                            <div v-if="enidiom" class="flag">
                                <img src="/images/usa.png">
                            </div>
                            <div v-if="esidiom" class="flag">
                                <img src="/images/mex.png">
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </header>
    </div>
    `,
    data() {
        return {
            btnopen:true,btnclose:false,
            enidiom:true,esidiom:false,
            showModalidiom:false
        }
    },
    methods: {
        upmenu(){this.btnopen=false,this.btnclose=true;},
        downmenu(){this.btnopen=true,this.btnclose=false;}
    },
})