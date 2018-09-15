'use strict';

/**
 * Receipename.js controller
 *
 * @description: A set of functions called "actions" for managing `Receipename`.
 */

module.exports = {

  /**
   * Retrieve receipename records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.receipename.search(ctx.query);
    } else {
      return strapi.services.receipename.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a receipename record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.receipename.fetch(ctx.params);
  },

  /**
   * Count receipename records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.receipename.count(ctx.query);
  },

  /**
   * Create a/an receipename record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.receipename.add(ctx.request.body);
  },

  /**
   * Update a/an receipename record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.receipename.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an receipename record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.receipename.remove(ctx.params);
  }
};
