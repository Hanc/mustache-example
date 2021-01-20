import parseTemplateToTokens from "./parseTemplateToTokens";

Object.defineProperty(String.prototype, 'trimMultiLine', {
    enumerable: false,
    value: function () {
            return this.replace(/ *[\r|\n] */gm, '')
    }
})

window.Template = {
    render(templateStr, data){
        templateStr = templateStr.trimMultiLine();
        var tokens = parseTemplateToTokens(templateStr);
        console.log(tokens);
    }
}