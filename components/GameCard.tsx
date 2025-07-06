import Image from "next/image";

interface Props {
  title: string;
  desc: string;
  image: string;
  href: string;
}

export function GameCard({ title, desc, image, href }: Props) {
  const isExternal = href.startsWith('http');
  
  return (
    <a 
      href={href} 
      className="block border rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow duration-200"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div className="relative w-full h-40 bg-gray-200">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{desc}</p>
        <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
          Play Now
        </span>
      </div>
    </a>
  );
}