// import { BlackoutTwoAM } from './layout';
import { Octokit } from '@octokit/rest';

const Page = async () => {
  // const text = await getMarkdown()

  return (
    <main className="min-h-screen bg-primary w-screen justify-center flex flex-col items-center ">
      <div className="h-screen flex items-center justify-center">
        <h1 className="font-humane text-secondary  text-[80vh] scale-y-150 pt-[12%]">
          TEFKAH
        </h1>
      </div>
      {/* <h2 className="text-secondary bg-primary p-10 font-bold tracking-wide font-humane text-8xl">
        THOMAS FK JORNA
      </h2> */}
      {/* Larger Scale ongoing project */}
      <div className=" w-screen gap-20 grid grid-cols-2">
        {/* List of projects */}

        <div className="flex items-center bg-secondary justify-center h-80">
          <h2 className="text-primary  text-8xl font-humane">ORG ROAM UI</h2>
        </div>
        <div className="bg-primary flex items-center  justify-center">
          <h2 className="text-secondary text-8xl font-humane">POWER</h2>
        </div>
        <div className="bg-primary flex items-center  justify-center">
          <h2 className="text-secondary text-8xl font-humane">POWER</h2>
        </div>
        <div className="flex items-center justify-center bg-secondary h-80">
          <h2 className="text-primary font-bold text-9xl font-humane">
            ZOTERO NIGHT
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Page;
