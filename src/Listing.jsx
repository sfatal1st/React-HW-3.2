const Listing = ({ items }) => {
    const formatPrice = (price, currencyCode) => {
        if (currencyCode === 'USD') {
          return '$' + parseFloat(price).toFixed(2);
        } else if (currencyCode === 'EUR') {
          return '€' + parseFloat(price).toFixed(2);
        } else {
          return parseFloat(price).toFixed(2) + ' ' + currencyCode;
        }
      };
        
    const getQuantityLevel = (quantity) => {
      if (quantity <= 10) {
        return 'level-low';
      } else if (quantity <= 20) {
        return 'level-medium';
      } else {
        return 'level-high';
      }
    };    
    const filteredItems = items.map((item) => {
        if (item.state !== "removed") { 
            return ( 
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} alt={item.title} />
                    </a>
                    </div>
                    <div className="item-details">
                    <p className="item-title">
                        {item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
                    </p>
                    <p className="item-price">
                        {formatPrice(item.price, item.currency_code)}
                    </p>
                    <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
                        {item.quantity} left
                    </p>
                    </div>
                </div>
            )
        }
        return null;

      
    });
    return <div className="item-list">{filteredItems}</div>;

};
  
export default Listing;