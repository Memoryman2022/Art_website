export default function Mail() {
  return (
    <div>
      <span className="p-">mailing list</span>
      <form className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2  border border-gray-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
