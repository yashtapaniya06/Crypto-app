import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");
  const [rankFilter, setRankFilter] = useState("All");
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // Fetch Data
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/crypto/savecryptoData")
      .then((res) => setCrypto(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Search Filter
  const filteredData = crypto.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
      coin.market_cap_rank.toString().includes(search) ||
      coin.current_price.toString().includes(search)
    );
  });

  // Dropdown
  const rankedData = filteredData.filter((coin) => {
    if (rankFilter === "All") return true;
    return coin.market_cap_rank <= parseInt(rankFilter);
  });

  // Sorting
  const sortedData = [...rankedData].sort((a, b) => {
    if (sortType === "price") return b.current_price - a.current_price;
    if (sortType === "marketCap") return b.market_cap - a.market_cap;
    return 0;
  });

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Crypto Tracker
      </h1>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-4 justify-between">
        <input
          type="text"
          placeholder="Search by name, symbol, rank..."
          className="p-2 border rounded w-full md:w-1/3"
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="p-2 border rounded"
          onChange={(e) => {
            setRankFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All</option>
          <option value="10">Top 10</option>
          <option value="50">Top 50</option>
          <option value="100">Top 100</option>
        </select>

        <select
          className="p-2 border rounded"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price">Price (High → Low)</option>
          <option value="marketCap">Market Cap</option>
        </select>
      </div>

      {/*Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Symbol</th>
              <th className="p-2">Price</th>
              <th className="p-2">Rank</th>
              <th className="p-2">24h Change</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((coin) => (
              <tr
                key={coin.id}
                className={`text-center border-b ${
                  coin.price_change_percentage_24h > 0
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                <td className="p-2">
                  <img src={coin.image} alt="" className="w-8 mx-auto" />
                </td>
                <td className="p-2">{coin.name}</td>
                <td className="p-2 uppercase">{coin.symbol}</td>
                <td className="p-2">${coin.current_price}</td>
                <td className="p-2">{coin.market_cap_rank}</td>
                <td className="p-2">
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          className="px-3 py-1 bg-gray-300 rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Back
        </button>

        <span className="px-3 py-1">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-3 py-1 bg-gray-300 rounded"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;