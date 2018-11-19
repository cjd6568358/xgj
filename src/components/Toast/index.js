import Vue from 'vue'
import Toast from './index.vue'
export default {
    init: (option, type) => {
        if (typeof option === 'string') {
            option = {
                msg: option,
                type
            };
        } else {
            option.type = type;
        }
        // let Component = Vue.extend(Toast)
        // return new Component({ propsData: option }).$mount().$el
        return new Vue({
            render: h => h(
                Toast, {
                    props: {...option }
                }
            )
        }).$mount().$el
    },
    info: function(option) {
        document.body.appendChild(this.init(option, 'info'))
    },
    normal: function(option) {
        const { el = document.querySelector("div[class$='-page view']") || document.body } = option
        el.appendChild(this.init(option, 'normal'))
    },
    error: function(option) {
        const { el = document.querySelector("div[class$='-page view']") || document.body } = option
        el.appendChild(this.init(option, 'error'))
    }
}