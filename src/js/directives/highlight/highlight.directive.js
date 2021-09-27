//import * as template from ".highlight.template.html";

export default [
    "appHighlight",
    [
        () => {
            return {
                scope: {
                    text: "=" //il binding direzionale non è lagato ai soli form
                },
                //template
                template: require("./highlight.template.html").default,
            };
        }
    ]
];