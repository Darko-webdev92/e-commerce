const CategoryScreen = {
    render: async  () =>{
        const request = parseRequestUrl();
        const categories = await getProduct(request.id);
        return ``
    }
}

export default CategoryScreen;