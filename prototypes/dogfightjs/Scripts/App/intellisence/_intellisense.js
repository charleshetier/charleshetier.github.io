function log(message) {
    //intellisense.logMessage(message);
}

intellisense.addEventListener('statementcompletion', function (e) {
    e.items.forEach(function (item) {
        // Detect a namespace by using the _isNamespace flag.
        if (item.value && item.value._isNamespace) {
            item.glyph = 'vs:GlyphGroupNamespace';
        }

        if (item.parentObject && item.parentObject._isNamespace) {
            // The item is a member of a namespace. 

            // All constructor functions that are part of a namespace 
            // are considered classes. 
            // A constructor function starts with
            // an uppercase letter by convention.  
            if (typeof item.value == 'function' && (item.name[0].toUpperCase()
                == item.name[0])) {
                item.glyph = 'vs:GlyphGroupClass';
            }

            // Detect an enumeration by using the _isEnum flag.
            if (item.value && item.value._isEnum) {
                item.glyph = 'vs:GlyphGroupEnum';
            }
        }
    });
});

intellisense.addEventListener('statementcompletionhint', function (e) {
    if (e.completionItem.value) {
        if (e.completionItem.value._isNamespace) {
            e.symbolHelp.symbolDisplayType = 'Namespace';
        }
        if (e.completionItem.value._isEnum) {
            e.symbolHelp.symbolDisplayType = 'Enum';
        }
    }
});










//test!!

//intellisense.logMessage('------------------------');

//function getProperties(object, name) {
//    intellisense.logMessage('{0} properties:'.format(name));
//    for (var i in object) {
//        var value = object[i];
//        var finalValue = 'nothing';
//        if(value !== undefined && value !== null && value.toString){
//            finalValue = value.toString();
//        } else {
//            finalValue = value;
//        }
//        intellisense.logMessage('  - {0}: {1} ({2})'.format(i, finalValue, typeof value));
//    }
//}

//intellisense.addEventListener('statementcompletion', function (e) {

//    if (e.targetName == 'toto') {
//        e.target = 1;
//        e.items = [{
//            name: 'titititi',
//            kind: 'field',
//            value: 5
//        }];
//    }
//});

//var i = function (toto) {
//    var toto = 1;
//    toto.
//};