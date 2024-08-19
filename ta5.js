const leap = (anio) =>{
    if(anio % 100 == 0){
        if(anio % 400 == 0){
            return true;
        }
        return false;
    }
    return anio % 4 == 0;
}

console.log(leap(1004));