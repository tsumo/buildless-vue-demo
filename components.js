Vue.component('round-button', {
    props: {
        title: String,
        icon: String,
        id: Number
    },
    template: `
        <div class="round-button" :title="title" @click="buttonClicked">
            <i class="material-icons">{{ icon }}</i>
        </div>
    `,
    methods: {
        buttonClicked: function() {
            this.$emit('button-clicked', this.id)
        }
    }
})


Vue.component('doc-list', {
    template: `
        <div class="doc-list">
            <slot></slot>
        </div>
    `
})


Vue.component('doc-header', {
    props: {
        title: String
    },
    template: `
        <div class="doc-header">
            {{ title }}
        </div>
    `
})


Vue.component('doc-row', {
    template: `
        <div class="doc-row"><slot></slot></div>
    `
})


Vue.component('doc-row-buttons', {
    template: `
        <div class="doc-row-buttons-wrapper">
            <div class="doc-row-buttons">
                <slot></slot>
            </div>
        </div>
    `
})


Vue.component('doc-row-text', {
    props: {
        name: String,
        info: String,
        icon: String,
        color: String
    },
    computed: {
        iconColor: function() {
            return "doc-row-text-icon-" + this.color
        }
    },
    template: `
        <div class="doc-row-text">
            <div class="material-icons doc-row-text-icon" :class="iconColor">
                {{ icon }}
            </div>
            <div class="doc-row-text-wrapper">
                <div class="doc-row-text-name">{{ name }}</div>
                <div class="doc-row-text-info">{{ info }}</div>
            </div>
        </div>
    `
})

