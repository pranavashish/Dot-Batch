export default function App() {
  return (
    <div>
      <h1 className="bg-white rounded-sm">Random GIFS</h1>
      <div className="flex flex-col">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
