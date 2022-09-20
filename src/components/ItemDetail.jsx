
const ItemDetail= ({products})=>{
    return(
   <>
 {products.map((product) =>
    <div className='container-card' >
    <img src={product.img} alt="" className="img-detail"/>
    <h2>{product.title}</h2>
    <h4 className="detail">{product.description}</h4>
    </div>
   )}
    
    </>
    );
        }
   

export default ItemDetail