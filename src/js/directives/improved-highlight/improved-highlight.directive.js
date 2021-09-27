export default [
    "appImprovedHighlight",
    [
        () => {
            return {
                link: (scope, el, attr) => {
                    console.log(attr);
                    let prevColor;
                    //el[0].style.backgroundColor = attr.highlightColor;
                    el[0].addEventListener("mouseover", () =>{
                        prevColor = el[0].style.backgroundColor;
                        el[0].style.backgroundColor = attr.highlightColor;
                    });
                    el[0].addEventListener("mouseout", () => el[0].style.backgroundColor = prevColor);
                }
            }
        }
    ]
]