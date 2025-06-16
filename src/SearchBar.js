import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
        return (
            <div style={{ margin: 10 }}>
                <div style={{ marginBottom: 5, fontWeight: 'bold' }}>
                    Nhập thông tin
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f5f5f5', borderRadius: 8, padding: 6 }}>
                    <FaRegEdit style={{ marginRight: 8, color: '#888' }} />
                    <input
                        style={{
                            flex: 1,
                            padding: 8,
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            fontSize: 16,
                        }}
                        type="text"
                        placeholder="Nhập từ khóa tìm kiếm..."
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={() => onSearch(query)}
                        style={{
                            background: '#1976d2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 5,
                            padding: '8px 16px',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            marginLeft: 8,
                        }}
                    >
                        <FaSearch style={{ marginRight: 6 }} />
                        Tìm kiếm
                    </button>
                </div>
            </div>
<<<<<<< HEAD
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
=======
>>>>>>> 4687584f38a956097e655bfaab39f9e3d69835d5

        );
    };

    export default SearchBar;