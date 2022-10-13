export const Photo = (id) => {
    
    let image;

    if( id === "5cd95395de30eff6ebccde5c" ){
    image= require("../../../assets/images/1.png")}
    
    if( id === "5cd95395de30eff6ebccde5b" ){
    image = require("../../../assets/images/2.png")}
    
    if( id === "5cd95395de30eff6ebccde5d" ){
    image = require("../../../assets/images/3.png")}

    if( id === "5cd95395de30eff6ebccde58" ){
    image = require("../../../assets/images/4.png")}

    if( id === "5cd95395de30eff6ebccde59" ){
    image = require("../../../assets/images/5.png")}

    if( id === "5cd95395de30eff6ebccde5a" ){
    image = require("../../../assets/images/6.png")}
    
    return image;

}