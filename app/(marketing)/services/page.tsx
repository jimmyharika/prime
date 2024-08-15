export default function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-medium mb-4">Flatbed Trucking</h2>
            <p>
              Specializing in the transportation of oversized and heavy loads
              across the nation.
            </p>
          </div>
          <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-medium mb-4">Freight Brokerage</h2>
            <p>
              We connect you with the best carriers to ensure that your goods
              are transported efficiently and cost-effectively.
            </p>
          </div>
          <div className="p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-medium mb-4">Expedited Shipping</h2>
            <p>
              When speed is critical, our expedited shipping services ensure
              timely delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
