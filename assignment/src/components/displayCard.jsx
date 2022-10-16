import "./card.css"
export const DisplayCard = ({data}) =>{
    
  const { id, img, location, type, rating, price } = data;
    return(
        <div className="common-flex">
        <div className="product-card">
          <div className="badge">
            <button className="submit-btn">Submit Work</button>
          </div>
  
          <div className="product-tumb">
            <img src={img} alt="houses" />
          </div>
          <div className="product-details">
            <span className="product-catagory">
              {" "}
              <p>catagory - {type}</p>
            </span>
  
            <p>location {location}</p>
            <div className="product-bottom-details">
              <div className="product-price">
                <img src={data?.icon} />
                <small>OYO</small>
              </div>
              <div className="rating-container">
                <small>{price} </small> <small>{rating}⭐</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}