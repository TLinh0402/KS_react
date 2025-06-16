import React from 'react';
import SearchBar from './SearchBar';

function App() {
  const handleSearch = (query) => {

    // Xử lý giá trị nhập vào ở đây
    alert('Vừa tìm kiếm : ' + query);

  };

  return (
    <div style={{ marginTop: 30 }}>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
