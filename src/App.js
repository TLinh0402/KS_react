import React from 'react';
import SearchBar from './SearchBar';

function App() {
  const handleSearch = (query) => {
    console.log('Từ khóa tìm kiếm:', query);
  };

  return (
    <div style={{ marginTop: 30 }}>
  
      <SearchBar onSearch={handleSearch} />
      {/* Các thành phần khác */}
    </div>
  );
}

export default App;