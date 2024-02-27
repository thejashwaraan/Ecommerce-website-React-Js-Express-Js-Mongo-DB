import React from 'react';
import { API } from '../config';

const ShowImage = ({ item, url }) => (
  <div className='product-img' style={{height: '250px',margin:'20px',padding:'20px'}}>
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
     
      style={{ objectFit: 'contain', height: '100%', width: '100%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
    />
  </div>
);

export default ShowImage;
