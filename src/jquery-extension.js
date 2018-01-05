jQuery.fn.extend({
    serializeData: function(dotReplace) {
        var jqueryObject = this;
        var mapParams = {};
        var params = {};
        $.each(this.serializeArray(), function(i, field) {
            if (mapParams[field.name] == undefined)
                mapParams[field.name] = [field.value];
            else
                mapParams[field.name].push(field.value);
        });
        $.each(mapParams, function(key, value) {
            if (value.length > 1 || jqueryObject.find("[name='" + key + "']").length > 1) {
                $.each(value, function(index, field) {
                    if (typeof (dotReplace) === 'undefined' && key.indexOf('.') > -1)
                        params[key.replace(".", ("[" + index + "]."))] = field;
                    else
                        params[key + "[" + index + "]"] = field;
                });
            } else {
                if (value != '')
                    params[key] = value[0];
            }
        });
        return params;
    }
});
