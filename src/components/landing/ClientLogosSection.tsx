import jioLogo from "@/assets/logos/Jio.webp";
import siemensLogo from "@/assets/logos/siemens.webp";
import rapidoLogo from "@/assets/logos/Rapido.webp";
import allpronowLogo from "@/assets/logos/allpronow.webp";
import hugoLogo from "@/assets/logos/Hugo.webp";
import yummyLogo from "@/assets/logos/Yummy.webp";
import glanceLogo from "@/assets/logos/Glance.webp";


const clientLogos = [
  { name: "Jio", src: jioLogo },
  { name: "Siemens", src: siemensLogo },
  { name: "Rapido", src: rapidoLogo },
  { name: "Hugo", src: hugoLogo },
  { name: "Yummy", src: yummyLogo },
  { name: "Glance", src: glanceLogo },
  { name: "AllProNow", src: allpronowLogo },
];

const ClientLogosSection = () => {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {clientLogos.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={name}
              className="h-8 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
