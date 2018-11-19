<template>
    <div class="toast" :class="{hide:isHide}">
        <div @click.stop.prevent :class="[customClass,type]">
            <div v-if="type=='info'" class="content" :class="[position]">
                {{msg}}
            </div>
            <div v-else class="content">
                {{msg}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Toast',
    props: {
        type: {
            type: String,
            default: 'info'
        },
        msg: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'center'
        },
        customClass: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 1500
        },
        onClose: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            isHide: false
        };
    },
    mounted() {
        setTimeout(() => {
            this.isHide = true;
            this.onClose();
            setTimeout(() => {
                this.$destroy();
                this.$el.remove();
            }, 500);
        }, this.duration);
    },
    computed: {},
    methods: {}
};
</script>
<style lang="scss">
@import './variable.scss';
.toast {
    font-size: 28px;
    color: $white;
    text-align: center;

    &.hide {
        .content {
            opacity: 0;
        }
    }
    .content {
        opacity: 1;
        transition: opacity 0.5s;
    }
    .info,
    .normal,
    .error {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
    .info {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        // &.indexLetterList-toast {
        //     font-size: 32px;
        //     .content {
        //         width: 80px;
        //     }
        // }
        .content {
            padding: 20px;
            border-radius: 8px;
            width: 350px;
            background-color: rgba(0, 0, 0, 0.8);
            &.center {
                align-self: center;
            }
            &.top {
                align-self: flex-start;
                margin-top: 150px;
            }
            &.bottom {
                align-self: flex-end;
                margin-bottom: 150px;
            }
        }
    }
    .normal {
        height: 100px;
        line-height: 100px;
        .content {
            background-color: $purple;
        }
    }
    .error {
        height: 100px;
        line-height: 100px;
        .content {
            background-color: $orange;
        }
    }
}
</style>
