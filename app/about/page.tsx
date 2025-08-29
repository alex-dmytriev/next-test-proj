import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About page",
};

const About = () => {
  redirect("/");
  return <div>About</div>;
};

export default About;
