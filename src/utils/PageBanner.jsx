import Breadcrumbs from './Breadcrumbs';

export default function PageBanner({ title, subtitle, image }) {
  return (
    <section
      className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       {/* Semi-transparent blue overlay */}
          {/* <div className="absolute inset-0 bg-[#005369] opacity-50" /> */}
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <Breadcrumbs />
      </div>

     
    </section>
  );
}