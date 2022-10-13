export const Photo = (id) => {
    
    let image;

    if( id === "5cd99d4bde30eff6ebccfc15" ){
    image= require("../../../assets/images/characters/frodo.png")}

    else if( id === "5cd99d4bde30eff6ebccfea0" ){
    image= require("../../../assets/images/characters/gandalf.png")}

    else if( id === "5cd99d4bde30eff6ebccfd0d" ){
    image= require("../../../assets/images/characters/sam.png")}

    else if( id === "5cd99d4bde30eff6ebccfe2e" ){
    image= require("../../../assets/images/characters/pippin.png")}

    else if( id === "5cd99d4bde30eff6ebccfc7c" ){
    image= require("../../../assets/images/characters/merry.png")}

    else if( id === "5cd99d4bde30eff6ebccfea4" ){
    image= require("../../../assets/images/characters/saruman.png")}

    else if( id === "5cd99d4bde30eff6ebccfbe6" ){
    image= require("../../../assets/images/characters/aragorn.png")}

    else if( id === "5cd99d4bde30eff6ebccfd81" ){
    image= require("../../../assets/images/characters/legolas.png")}

    else if( id === "5cd99d4bde30eff6ebccfd23" ){
    image= require("../../../assets/images/characters/gimli.png")}

    else if( id === "5cd99d4bde30eff6ebccfc57" ){
    image= require("../../../assets/images/characters/boromir.png")}

    else if( id === "5cd99d4bde30eff6ebccfcef" ){
    image= require("../../../assets/images/characters/faramir.png")}

    else if( id === "5cdbdecb6dc0baeae48cfa5a" ){
    image= require("../../../assets/images/characters/eomer.png")}

    else if( id === "5cd99d4bde30eff6ebccfc07" ){
    image= require("../../../assets/images/characters/arwen.png")}

    else if( id === "5cd99d4bde30eff6ebccfe9e" ){
    image= require("../../../assets/images/characters/gollum.png")}

    else if( id === "5cd99d4bde30eff6ebccfea5" ){
    image= require("../../../assets/images/characters/sauron.png")}
    
    else if( id === "5cd99d4bde30eff6ebccfd06" ){
    image= require("../../../assets/images/characters/galadriel.png")}

    else if( id === "5cd99d4bde30eff6ebccfc38" ){
    image= require("../../../assets/images/characters/bilbobaggins.png")}

    else if( id === "5cd99d4bde30eff6ebccfcc8" ){
    image= require("../../../assets/images/characters/elrond.png")}

    else if( id === "5cdbdecb6dc0baeae48cfa59" ){
    image= require("../../../assets/images/characters/eowyn.png")}

    else if( id === "5cdbdecb6dc0baeae48cfa44" ){
    image= require("../../../assets/images/characters/shelob.png")}

    else if( id === "5cd99d4bde30eff6ebccfd82" ){
    image= require("../../../assets/images/characters/isildur.png")}

    else if( id === "5cd99d4bde30eff6ebccfe19" ){
    image= require("../../../assets/images/characters/theoden.png")}

    else if( id === "5cd99d4bde30eff6ebccfc9a" ){
    image= require("../../../assets/images/characters/denethor.png")}

    else if( id === "5cd99d4bde30eff6ebccfc7e" ){
    image= require("../../../assets/images/characters/celeborn.png")}

    else if( id === "5cd99d4bde30eff6ebccfe9d" ){
    image= require("../../../assets/images/characters/grima.png")}

    // if( id === "" ){
    // image= require("../../../assets/images/.jpg")}

    else{
        image=require("../../../assets/images/characters/lotr.png")
        // image=require("../../../assets/images/nop.png")
        // image=require("../../../assets/images/nophoto.png")
    }
    
    return image;

}