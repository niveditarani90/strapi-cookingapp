'use strict';

/**
 * Chefs.js controller
 *
 * @description: A set of functions called "actions" for managing `Chefs`.
 */

module.exports = {

  /**
   * Retrieve chefs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.chefs.search(ctx.query);
    } else {
      return strapi.services.chefs.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a chefs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.chefs.fetch(ctx.params);
  },

  /**
   * Count chefs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.chefs.count(ctx.query);
  },

  /**
   * Create a/an chefs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.chefs.add(ctx.request.body);
  },

  /**
   * Update a/an chefs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.chefs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an chefs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.chefs.remove(ctx.params);
  }
};
