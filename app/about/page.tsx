import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">WHO WE ARE</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          We are a team of dreamers, doers, and creators passionate about
          redefining the digital landscape.
        </p>
      </div>
      <About />

      <div className="py-20 bg-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl font-bold mb-10">Leading with Innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 border border-white/10 rounded-2xl bg-black">
              <h3 className="text-xl font-bold text-primary mb-4">
                Strategy First
              </h3>
              <p className="text-gray-400">
                We don't just build; we plan. Every project starts with a deep
                dive into your goals.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-black">
              <h3 className="text-xl font-bold text-primary mb-4">
                Pixel Perfect
              </h3>
              <p className="text-gray-400">
                Obsessive attention to detail ensures your brand looks flawless
                on every screen.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-black">
              <h3 className="text-xl font-bold text-primary mb-4">
                Result Driven
              </h3>
              <p className="text-gray-400">
                We focus on metrics that matter - traffic, engagement, and
                conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
