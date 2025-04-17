import Hero from "../../components/hero";

export default function About() {
  return (
    <div>
      <Hero />
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600">
              We are passionate about sharing knowledge on technology,
              programming, and more. Our mission is to inspire and educate our
              readers through high-quality content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
