const getProduct = async (id) =>{
    // try{
    //  const response = 
    // }catch(err){

    // }

    try{
        const response = await fetch(`http://localhost:3000/products/${id}`,{
            headers: {
                'Content-type': 'application/json',
            }
        })
        if (response.status >= 200 && response.status <= 299) {
            return await response.json();
        }else{
            throw Error(response.statusText);
        }
    }catch(err){
        console.log(err)
        return {
            error: err.message
        }
    }
}

export default getProduct;