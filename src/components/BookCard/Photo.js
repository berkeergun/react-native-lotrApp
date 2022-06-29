export const Photo = (id) => {
    
    let image;

    if( id === "5cf5805fb53e011a64671582" ){
    image= require("../../../assets/images/5cf5805fb53e011a64671582.jpg")}
    
    if( id === "5cf58077b53e011a64671583" ){
    image = require("../../../assets/images/5cf58077b53e011a64671583.jpg")}
    
    if( id === "5cf58080b53e011a64671584" ){
    image = require("../../../assets/images/5cf58080b53e011a64671584.jpg")}
    
    return image;

}