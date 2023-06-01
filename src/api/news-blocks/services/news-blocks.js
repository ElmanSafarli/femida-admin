'use strict';

/**
 * news-blocks service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-blocks.news-blocks');
