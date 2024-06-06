import { Buttons } from "./Buttons";

 const Footer =() => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white border-gray-200 mt-4 border-t-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
          <div className="font-bold text-lg">NaraiCoder Org {year}</div>
          <div>
            <ul className="flex flex-wrap gap-x-8">
              <Buttons />
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer