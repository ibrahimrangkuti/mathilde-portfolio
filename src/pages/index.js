import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <div className="grid place-content-center text-center lg:text-left">
        <h1 title="Mathilde Langevin" className="text-[80px] leading-[70px]">
          Mathilde Langevin
        </h1>
        <div className="my-10 mb-10 lg:mb-28 space-y-5 text-2xl">
          <div className="flex flex-col">
            <span className="font-light">Fashion Photography</span>
            <span>Portfolio</span>
          </div>
          <div>
            I use my camera to tell stories. I have been doing this
            professionally for ten years and I have no plans of stopping.
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="border bg-slate-700 text-white border-slate-500 p-5 px-10"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>

      <div className="mt-10 lg:mt-0 w-full h-[300px] lg:w-1/2 lg:h-[700px]">
        <img
          src="/photo/pexels-mathilde-langevin-home.jpg"
          alt="Mathilde"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
