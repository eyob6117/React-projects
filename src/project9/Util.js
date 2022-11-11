function CompnenetToHex(c){
   var hex = c.toString(16);
}
function rgbToHex(r,g,b){
    return '#' + CompnenetToHex(r) + CompnenetToHex(g) + CompnenetToHex(b);
}
export default rgbToHex;