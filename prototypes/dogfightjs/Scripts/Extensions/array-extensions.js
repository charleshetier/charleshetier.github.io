'use strict';

if (!Array.prototype.and) Array.prototype.and = function (array) {
    /// <summary>Creates a new array instance merged with the specified array</summary>
    /// <param name="array" type="Array">The array to merge with this array</param>
    
    var newArray = [];
    newArray.push.apply(newArray, this);
    newArray.push.apply(newArray, array);
    return newArray;
}

if (!Array.prototype.select) Array.prototype.select = function (iterator, context) {
    /// <summary>Performs a projection on the extended array</summary>
    /// <param name="iterator" type="Function">The iterator function</param>
    /// <param name="context" type="Object">The context of the underscore called function</param>
    /// <returns type="Array" />

    return _.map(this, iterator, context);
}

if (!Array.prototype.where) Array.prototype.where = function (predicate, context) {
    /// <summary>Filters a list according to the specified predicate</summary>
    /// <param name="predicate" type="Function">The filtering predicate function</param>
    /// <param name="context" type="Object">The context of the underscore called function</param>
    /// <returns type="Array" />

    return _.filter(this, predicate, context);
}

if (!Array.prototype.orderBy) Array.prototype.orderBy = function (iterator, context) {
    /// <summary>Orders a list according to the specified sort criteria provider</summary>
    /// <param name="iterator" type="Function">The sort provider function</param>
    /// <param name="context" type="Object">The context of the underscore called function</param>
    /// <returns type="Array" />

    return _.sortBy(this, iterator, context);
}

if (!Array.prototype.groupBy) Array.prototype.groupBy = function (iterator, context) {
    /// <summary>Groups a list according to the given group criteria provider</summary>
    /// <param name="iterator" type="Function">The group provider function</param>
    /// <param name="context" type="Object">The context of the underscore called function</param>
    /// <returns type="Array" />

    return _.groupBy(this, iterator, context);
}

if (!Array.prototype.first) Array.prototype.first = function (predicate, context) {
    /// <summary>Looks for a match determined by the given predicate</summary>
    /// <param name="predicate" type="Function">The predicate to find the searched element</param>
    /// <param name="context" type="Object">The context of the underscore called function</param>

    if (window.intellisense) return this[0];
    return _.find(this, predicate, context);
}

if (!Array.prototype.any) Array.prototype.any = function (predicate, context) {
    /// <summary>Determines whether a predicate match exists in the specified array</summary>
    /// <param name="predicate" type="Function">The predicate to find the searched element</param>
    /// <param name="context" type="Object">The context of the underscore called function</param>
    /// <returns type="Boolean" />

    return !!this.first(predicate, context);
}

if (!Array.prototype.each) Array.prototype.each = function (iterator, context) {
    /// <summary>Iterates throught the given list applying the specified iterator. The original list is returned</summary>
    /// <param name="iterator" type="Function">The iterator function which prototype is function(value, key)</param>
    /// <param name="context" type="Object">The context of the underscore called function</param>
    /// <returns type="Array" />

    return _.each(this, iterator, context);
}

if (!Array.prototype.indexOf) Array.prototype.indexOf = function (value) {
    /// <summary>Returns the index of the specified value in the targeted array</summary>
    /// <param name="value" type="Object">The searched value in the array</param>
    /// <returns type="Number" />

    return _.indexOf(this, value);
}