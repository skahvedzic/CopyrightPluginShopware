import template from './sw-sales-channel-detail-base-override.html.twig';

Shopware.Component.override('sw-sales-channel-detail-base', {

    inject: ['repositoryFactory'],
    template,

    props: {
        salesChannel: {
            required: true,
        },
    },

    computed: {
        salesChannelRepository() {
            return this.repositoryFactory.create('sales_channel');
        },

        footerText: {
            get() {
                if (this.salesChannel.customFields === null) {
                    this.salesChannel.customFields = {};
                }

                if (!this.salesChannel.customFields.footer_copy_right_color) {
                    this.$set(this.salesChannel.customFields, 'footer_copy_right_text', 'Copyright © signundsinn GmbH');
                }

                return this.salesChannel.customFields.footer_copy_right_text;
            },
            set(value) {
                this.$set(this.salesChannel.customFields, 'footer_copy_right_text', value);
            },
        },
        
        footerColor: {
            get() {
                if (this.salesChannel.customFields === null) {
                    this.salesChannel.customFields = {};
                }

                if (!this.salesChannel.customFields.footer_copy_right_color) {
                    this.$set(this.salesChannel.customFields, 'footer_copy_right_color', '#eb4034');
                }

                return this.salesChannel.customFields.footer_copy_right_color;
            },
            set(value) {
                this.$set(this.salesChannel.customFields, 'footer_copy_right_color', value);
            },
        },
    }
});







