import Vue from 'vue'
import Modal from './index.vue'
export default function openModal(options = {}) {
    // let { $router, $store } = this
    // options.$router = $router
    // options.$store = $store
    // let Component = Vue.extend(Modal)
    // document.body.appendChild(new Component({ propsData: options }).$mount().$el)
    let { $router: router, $store: store } = this
    let modal = new Vue({
        router,
        store,
        render: h => h(
            Modal, {
                props: options
            }
        )
    })
    document.body.appendChild(modal.$mount().$el)
    return modal.$children[0]
}