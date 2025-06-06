const ProductModel =require('../models/productModel')

exports.getProducts = async(req,res,next) => {
    const query=req.query.keyword?{ name:{ 
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products = await ProductModel.find(query);
    res.json({
        success:true,
        products
    })
}


exports.getSingleProduct1 = async(req,res,next) => {
    console.log(req.params.id,'ID')
    try{
    const product=await ProductModel.findById(req.params.id);

    res.json({
        success:true,
        product
    })
}catch(error){
    res.status(404).json({
        success:false,
        message:'Unable to get product with that id'
    })
}
}