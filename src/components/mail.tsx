export default function Mail() {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-semibold text-white">Mailing List</span>
      <form className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="text-sm px-4 py-2 border border-gray-300 text-gray-700 "
        />
        <button
          type="submit"
          className="text-sm px-4 py-2 bg-gray-900 text-white hover:bg-gray-600 rounded-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
