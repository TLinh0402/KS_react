import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    return (
        <div style={{ margin: 10 }}>
            <div style={{ marginBottom: 5, fontWeight: 'bold' }}>
                Nhập thông tin
            </div>
            <div style={{ display: 'flex', margin: 10 }}>
                <input
                    style={{ flex: 1, padding: 8, marginRight: 10, borderRadius: 5, border: '1px solid #ccc' }}
                    type="text"
                    placeholder="Nhập vào đây nè..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button onClick={() => onSearch(query)}>Tìm kiếm</button>
            </div>
        </div>


    );
};

export default SearchBar;