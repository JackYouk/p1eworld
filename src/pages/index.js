

const LoadingBar = ({ percent }) => {
  return (
    <div className="w-96 bg-gray-300/20 h-4 rounded-lg overflow-hidden shadow-md shadow-blue-500">
      <div
        className="h-full bg-gray-100 transition-all duration-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#071330] flex justify-center items-center">
      <img src='./logo.png' className="w-full" />
      <LoadingBar percent={40} />
    </div>
  );
}
