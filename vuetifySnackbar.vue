<template>
    <v-snackbar
            v-model="snackbar"
            :absolute="params.absolute"
            :auto-height="params.autoHeight"
            :bottom="params.bottom"
            :color="params.color || typeColor()"
            :left="params.left"
            :multi-line="params.multiLine"
            :right="params.right"
            :timeout="params.timeout"
            :top="params.top"
            :value="params.value"
            :vertical="params.vertical"
            class="text-xs-left"
    >
        <v-icon left>{{ typeIcon() }}</v-icon>
        {{ params.text }}
        <v-spacer/>
    </v-snackbar>
</template>

<script>
    export default {
        data: () => ({
            snackbar: false,
            params: {},
        }),

        methods: {
            typeColor() {
                if (!this.params.type)
                    return null;
                switch (this.params.type) {
                    case 'error':
                        return 'error';
                    case 'success':
                        return 'success';
                    case 'warning':
                        return 'warning';
                    case 'info':
                        return 'info';
                    default:
                        return null;
                }
            },
            typeIcon() {
                if (!this.params.type)
                    return null;
                switch (this.params.type) {
                    case 'error':
                        return 'report_problem';
                    case 'success':
                        return 'check_circle';
                    case 'warning':
                        return 'priority_high';
                    case 'info':
                        return 'info';
                    default:
                        return null;
                }
            },
        },

        mounted() {
            this.$nextTick(() => {
                this.snackbar = true;
            })
        }
    }
</script>
