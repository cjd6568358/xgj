<script>
/**@argument
 * <template>
    <div class="hmc-modal-root">
        <div :class="wrapperClass">
            <div class="modal">
                <div :class="modalClass" @click="maskClosable && closeModal">
                    <div class="modal-container" :style="customStyle" @click.stop>
                        <component :is="content"></component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 */
/**@argument
 * 关闭弹框分为两种情况：
 * 1、关闭弹框并停留在当前页面：this.$emit('closeModal',event);
 * 2、关闭弹框会跳转到新页面：this.$emit('closeModal');this.$router.replace('新页面')
 */
export default {
    name: 'ModalComponent',
    props: {
        customClass: {
            default: ''
        },
        customStyle: {
            default: null
        },
        content: {
            default: {}
        },
        maskClosable: {
            default: false
        },
        showCloseBtn: {
            default: false
        },
        position: {
            default: 'center'
        }
    },
    data() {
        return {
            animateClass: this.getAnimateClass()
        };
    },
    mounted() {
        this.addEventHandler();
        this.$emit('modalMounted');
    },
    // beforeMount() {
    // },
    beforeDestroy() {
        this.removeEventHandler();
        this.$emit('modalBeforeDestroy');
    },
    methods: {
        getAnimateClass() {
            switch (this.position) {
                case 'top':
                    return 'slide-down';
                case 'right':
                    return 'slide-left';
                case 'bottom':
                    return 'slide-up';
                case 'left':
                    return 'slide-right';
                default:
                    return 'fade-in';
            }
        },
        addEventHandler() {
            if (!window.modalList || window.modalList.length == 0) {
                window.modalList = [];
                history.pushState(null, null, location.href);
            } else {
                window.removeEventListener('popstate', window.modalList.slice(-1)[0].closeModal, false);
            }
            window.addEventListener('popstate', this.closeModal, false);
            window.modalList.push(this);
            if (window.modalList.length > 1) {
                return;
            }
            let overflowContainer = document.querySelector('.overflow-container');
            if (overflowContainer) {
                overflowContainer.style.overflowY = 'hidden';
                overflowContainer.style.webkitOverflowScrolling = 'auto';
            }
        },
        removeEventHandler() {
            window.removeEventListener('popstate', this.closeModal, false);
            // fix IOS 点击遮罩区后再关闭弹框，页面按钮点击没反应
            document.body.scrollIntoView();
            if (window.modalList.length > 0) {
                return;
            }
            let overflowContainer = document.querySelector('.overflow-container');
            if (overflowContainer) {
                overflowContainer.style.overflowY = 'auto';
                overflowContainer.style.webkitOverflowScrolling = 'touch';
            }
        },
        closeModal(e) {
            var vm = this;
            const { animateClass, $el } = vm;

            if (e && e.type == 'click') {
                if (window.modalList.length == 1) {
                    history.back();
                    return;
                } else {
                    e.stopPropagation();
                }
            }

            window.modalList.pop();
            if (window.modalList.length) {
                if (e && e.type == 'popstate') {
                    history.pushState(null, null, location.href);
                }
                window.addEventListener('popstate', window.modalList.slice(-1)[0].closeModal, false);
            }

            vm.animateClass = `${animateClass}-reverse`;
            vm.$nextTick().then(() => {
                setTimeout(() => {
                    vm.$destroy();
                    document.body.removeChild($el);
                }, 300);
            });
        },
        closeBtnClick(e) {
            if (this.$listeners.closeBtnClick || this._events.closeBtnClick) {
                this.$emit('closeBtnClick', e);
            } else {
                this.closeModal(e);
            }
        },
        maskClick(e) {
            if (this.maskClosable) {
                this.$emit('maskClick');
                this.closeModal(e);
            }
        }
    },
    computed: {
        wrapperClass() {
            const { customClass } = this;
            return `modal-wrapper ${customClass}`;
        },
        modalClass() {
            const { animateClass, position } = this;
            return `modal-${position} ${animateClass}`;
        }
    },
    render() {
        const { wrapperClass, customStyle, content, showCloseBtn, modalClass, closeModal, closeBtnClick, maskClick } = this;
        if (content.componentOptions) {
            let { listeners = {} } = content.componentOptions;
            listeners.closeModal = closeModal;
            content.componentOptions.listeners = listeners;
        }
        return (
            <div class="hmc-modal-root">
                <div class={wrapperClass}>
                    <div class="modal">
                        <div class={modalClass} onClick={maskClick}>
                            <div class="modal-container" style={customStyle} onClick={e => e.stopPropagation()}>
                                {content}
                                {showCloseBtn && (
                                    <svg class="modal-close-btn" onClick={closeBtnClick}>
                                        <use xlinkHref="#icon-close" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
</script>
<style lang="scss">
@import './variable.scss';
$mask-bg: rgba(0, 0, 0, 0.5);
$box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);
$modal-z: 99;
$modal-container-z: 100;
$animation-duration: 0.3s !default;
$font-size: 24px;
.absolute-position {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

.modal-wrapper {
    @extend .absolute-position;
    z-index: $modal-z;
    font-size: $font-size;
}

.modal {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: $mask-bg;
    .modal-container {
        position: relative;
        .modal-close-btn {
            position: absolute;
            z-index: 9;
            top: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            fill: $word-black;
            // background: transparent url(./images/icon_close_default.png) no-repeat;
        }
    }
    &-center,
    &-top,
    &-right,
    &-bottom,
    &-left {
        @extend .absolute-position;
        z-index: $modal-container-z;
        display: flex;
    }
    &-center {
        justify-content: center;
        align-items: center;
        overflow-y: auto;
        .modal-container {
            min-width: 70%;
            max-height: 90%;
            border-radius: 8px;
        }
    }
    &-top {
        .modal-container {
            width: 100%;
        }
    }
    &-right {
        justify-content: flex-end;
        align-items: flex-start;
        .modal-container {
            height: 100%;
        }
    }
    &-left {
        .modal-container {
            height: 100%;
        }
    }
    &-bottom {
        align-items: flex-end;
        .modal-container {
            width: 100%;
        }
    }
    &-container {
        box-shadow: $box-shadow;
        background: #fff;
    }
}

// animations, to optimize later
.fade-in {
    animation: $animation-duration ease-in fadeIn forwards;
}

.fade-in-reverse {
    animation: $animation-duration ease-out fadeInReverse forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInReverse {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.slide-right {
    transform: translateX(-100%);
    animation: $animation-duration ease-in 0.3s slideRight forwards;
}

.slide-right-reverse {
    animation: $animation-duration ease-out slideRightReverse forwards;
}

@keyframes slideRight {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideRightReverse {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.slide-left {
    transform: translateX(100%);
    animation: $animation-duration ease-in 0.3s slideLeft forwards;
}

.slide-left-reverse {
    animation: $animation-duration ease-out slideLeftReverse forwards;
}

@keyframes slideLeft {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideLeftReverse {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}

.slide-down {
    transform: translateY(-100%);
    animation: $animation-duration ease-in 0.3s slideDown forwards;
}

.slide-down-reverse {
    animation: $animation-duration ease-out slideDownReverse forwards;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slideDownReverse {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
}

.slide-up {
    transform: translateY(100%);
    animation: $animation-duration ease-in 0.3s slideUp forwards;
}

.slide-up-reverse {
    animation: $animation-duration ease-out slideUpReverse forwards;
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slideUpReverse {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(100%);
    }
}
</style>