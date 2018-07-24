define([
    'jquery',
    'Magento_Catalog/js/price-utils',
    'underscore',
    'mage/template',
    'jquery/ui'
    ], function ($, utils, _, mageTemplate) {
        'use strict';

        return function (priceBox) {
            return $.widget('mage.priceBox', priceBox, {
                onUpdatePrice: function onUpdatePrice(event, prices) {
                    if (this.element.find('.price-container').hasClass('price-range')) {
                        return this;
                    } else {
                        return this.updatePrice(prices);
                    }
                },
            });
        };
    }
);