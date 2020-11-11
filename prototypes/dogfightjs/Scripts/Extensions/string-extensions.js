'use strict';

if (!String.prototype.toPascalCase) String.prototype.toPascalCase = function () {
    /// <summary>Formats a string into PascalCase</summary>

    return this.charAt(0).toUpperCase() + this.substr(1);
};

if (!String.prototype.toCamelCase) String.prototype.toCamelCase = function () {
    /// <summary>Formats a string into camelCase</summary>

    return this.charAt(0).toLowerCase() + this.substr(1);
};

if (!String.prototype.format) String.prototype.format = function () {
    /// <summary> Replaces the format item in a specified string with the string representation of a corresponding object in a specified array</summary>

    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return args[number] !== undefined ? args[number] : '';
    });
};