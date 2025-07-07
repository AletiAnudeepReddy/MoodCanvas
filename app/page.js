import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <div className="container mx-auto grid grid-cols-2 mt-32">
        <div className="col1">

        </div>
        <div className="col2 flex items-center justify-center mt-10">
          <Image width={300} height={500} src={"/wallpage.jpeg"} alt="m" className="rounded-xl"/>
        </div>
      </div>
    </div>
     </>
  );
}
