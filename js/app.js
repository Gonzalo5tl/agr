const messages = {
    name:'messages',
    template:'#hometemplate',
    
    template: //html 
    `
        <div id=hometemplate>
        <!--<home></home>-->
            <banner></banner>
        </div>
    `,
    es:{
        banner:{
            title:'Tu asesor fiscal',
            txt:'Consulta con Nosotros'
        },
        menu:{
            home:'Inicio',
            services:'Servicios',
            weare:'Nosotros',
            contact:'Contacto'
        },
        btn:{
            txt:'Comenzar',
        }
    },
    eng:{
        banner:{
            title:'Your Tax Consultant',
            txt:'Consult with us',
        },
        menu:{
            home:'Home',
            services:'Services',
            weare:'About Us',
            contact:'Contact'
        },
        btn:{
            txt:'Start',
        }
    }
}

//VueI18n
const i18n = new VueI18n({
    locale: 'es', // set locale
    messages,
  })

var router = new VueRouter({
    //mode:'history',
    routes:[
      {path:'/', component:messages},
      {path:'/login', component:Login}
    ]
  });

new Vue({
    element:'#app',
    i18n,

    router,
    template:'#templates',

}).$mount('#app')
