export const Photo = (id) => {
    
    let image;

    if( id === "5cd99d4bde30eff6ebccfc15" ){
    image= require("../../../assets/images/characters/frodo.png")}

    else if( id === "5cd99d4bde30eff6ebccfea0" ){
    image= require("../../../assets/images/characters/gandalf.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfd0d" ){
    image= require("../../../assets/images/characters/sam.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfe2e" ){
    image= require("../../../assets/images/characters/pippin.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfc7c" ){
    image= require("../../../assets/images/characters/merry.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfea4" ){
    image= require("../../../assets/images/characters/saruman.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfbe6" ){
    image= require("../../../assets/images/characters/aragorn.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfd81" ){
    image= require("../../../assets/images/characters/legolas.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfd23" ){
    image= require("../../../assets/images/characters/gimli.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfc57" ){
    image= require("../../../assets/images/characters/boromir.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfcef" ){
    image= require("../../../assets/images/characters/faramir.jpg")}

    else if( id === "5cdbdecb6dc0baeae48cfa5a" ){
    image= require("../../../assets/images/characters/eomer.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfc07" ){
    image= require("../../../assets/images/characters/arwen.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfe9e" ){
    image= require("../../../assets/images/characters/gollum.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfea5" ){
    image= require("../../../assets/images/characters/sauron.jpg")}
    
    else if( id === "5cd99d4bde30eff6ebccfd06" ){
    image= require("../../../assets/images/characters/galadriel.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfc38" ){
    image= require("../../../assets/images/characters/bilbobaggins.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfcc8" ){
    image= require("../../../assets/images/characters/elrond.jpg")}

    else if( id === "5cdbdecb6dc0baeae48cfa59" ){
    image= require("../../../assets/images/characters/eowyn.jpg")}

    else if( id === "5cdbdecb6dc0baeae48cfa44" ){
    image= require("../../../assets/images/characters/shelob.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfd82" ){
    image= require("../../../assets/images/characters/isildur.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfe19" ){
    image= require("../../../assets/images/characters/theoden.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfc9a" ){
    image= require("../../../assets/images/characters/denethor.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfc7e" ){
    image= require("../../../assets/images/characters/celeborn.jpg")}

    else if( id === "5cd99d4bde30eff6ebccfe9d" ){
    image= require("../../../assets/images/characters/grima.jpg")}

    // if( id === "" ){
    // image= require("../../../assets/images/.jpg")}

    else{
        image=require("../../../assets/images/characters/lotr.png")
        // image=require("../../../assets/images/nop.png")
        // image=require("../../../assets/images/nophoto.png")
    }
    
    return image;

}