import Link from "next/link";

export default function Home({
  searchParams,
}: {
  searchParams: { show: string | undefined };
}) {
  const isDialogboxOpen = searchParams.show === "true" ? true : false;
  return (
    <main className="flex flex-col gap-4 justify-center items-center w-full size-full min-h-screen bg-[#c6bbb8]">
      <div className="w-1/3 text-justify">
        Wondering how i achieved a server side rendered modal in nextjs? <br />i
        used the query params to toggle the modal. For a Quick demo click the
        button below.
      </div>

      <Link
        href="/?show=true"
        className={`${isDialogboxOpen ? "opacity-0" : ""}`}
      >
        <button className=" bg-[#e7dfd9] p-3 border border-black rounded-lg transition-shadow duration-300 ease-out hover:shadow-md">
          Open Modal
        </button>
      </Link>

      <Link href={"/"}>
        <div
          className={`size-full bg-black/30 backdrop-blur-sm fixed top-0 left-0 z-40 ${
            isDialogboxOpen ? "" : "hidden"
          }`}
        ></div>
      </Link>
      <div
        className={`${
          isDialogboxOpen ? "" : "hidden"
        }  z-50 flex flex-col items-center gap-4 justify-center size-1/2 bg-black/70 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
      >
        <p className="text-white">Cool {"isn't"} it?</p>
        <p className="text-white">
          Notice How the link carries my modal state?
        </p>

        <Link href={"/"}>
          <button className="bg-[#e7dfd9]/50 hover:bg-[#e7dfd9] transition-colors duration-300 ease-out p-3  rounded-md">
            Close Modal
          </button>
        </Link>
      </div>
    </main>
  );
}
