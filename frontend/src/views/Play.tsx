import { useParams } from "react-router-dom";

const Play = () => {
  const {id} = useParams();

  return (
    <div className="sm:px-14 px-3 mt-10">
      <h1 className="font-bold text-2xl">Panel gracza </h1>
      <main className="flex flex-col mt-5">
        {id}
      </main>
    </div>
  );
};

export default Play;
