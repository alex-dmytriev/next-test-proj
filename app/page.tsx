import Image from "next/image";
import noteImg from "@/public/note-img.png";

const Home = () => {
  return (
    <section>
      <h1>Welcome Home</h1>
      <p>This is Home Page</p>
      <Image
        src={noteImg}
        alt="test-note"
        width={300}
        height={300}
        sizes="(max-width: 768px) 100vw, 5vw"
        priority
        placeholder="blur"
      />
    </section>
  );
};

export default Home;
