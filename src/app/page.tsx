import Hero from "@/components/others/home/Hero";
import { heroInfo } from "@/lib/homepage/heroInfo";

export default function Home() {
  return (
    <div className="container text-center mx-auto">
      <Hero
        title={heroInfo?.title}
        description={heroInfo?.description}
        buttonText={heroInfo?.buttonText}
      />
    </div>
  );
}
