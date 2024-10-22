import MovieList from "../Components/Cine/MovieList";
import SideBar from "../Components/SideBar";
import Headers from "../Headers";

const Page = () => {
  return (
    <>
      <Headers />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          <MovieList />
        </div>
      </main>
    </>
  );
};

export default Page;
