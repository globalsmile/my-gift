import React, { useState } from 'react';

const GiftItemTracker = () => {
	  const [giftItems, setGiftItems] = useState([]);
	  const [newItem, setNewItem] = useState('');

	  const handleInputChange = (e) => {
		      setNewItem(e.target.value);
		    };

	  const handleAddItem = () => {
		      if (newItem.trim() !== '') {
			            setGiftItems([...giftItems, newItem.trim()]);
			            setNewItem('');
			          }
		    };

	  const handleRemoveItem = (index) => {
		      const updatedItems = [...giftItems];
		      updatedItems.splice(index, 1);
		      setGiftItems(updatedItems);
		    };

	  return (
		      <div>
		        <h2>Gift Item Tracker</h2>
		        <div>
		          <input
		            type="text"
		            value={newItem}
		            onChange={handleInputChange}
		            placeholder="Enter gift item"
		          />
		          <button onClick={handleAddItem}>Add Item</button>
		        </div>
		        <ul>
		          {giftItems.map((item, index) => (
				            <li key={index}>
				              {item}
				              <button onClick={() => handleRemoveItem(index)}>Remove</button>
				            </li>
				          ))}
		        </ul>
		      </div>
		    );
};

export default GiftItemTracker;

