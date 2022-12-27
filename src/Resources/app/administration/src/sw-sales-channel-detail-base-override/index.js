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
                return this.footer_text;
            },
            set(value) {
                this.footer_text = value;
            },
        },
        
        footer_text: {
            get() {
                if(!this.salesChannel.customFields.footer_copy_right_text){
                    this.salesChannel.customFields.footer_copy_right_text =  "Copyright © signundsinn GmbH";
                }
                return this.salesChannel.customFields.footer_copy_right_text;
            },
            set(value) {
                this.salesChannel.customFields.footer_copy_right_text = value;
        
            },
        },
        footerColor: {
            get() {
                return this.footer_color;
            },
            set(value) {
                this.footer_color = value;
            },
        },
        
        footer_color: {
            get() {
                if(!this.salesChannel.customFields.footer_copy_right_color){
                    this.salesChannel.customFields.footer_copy_right_color =  "#eb4034";
                }
                return this.salesChannel.customFields.footer_copy_right_color;
            },
            set(value) {
                this.salesChannel.customFields.footer_copy_right_color = value;
        
            },
        },
    }

});







