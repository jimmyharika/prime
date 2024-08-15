export default function AboutUs() {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-12">About Us</h1>
        <p className="text-lg leading-relaxed mb-8">
          Founded in 2010, TruckingCo has grown into one of the nations leading
          freight and logistics companies. Our mission is to provide reliable,
          efficient, and cost-effective transportation solutions across North
          America.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-medium mb-4">Our History</h2>
            <p>
              Over the past decade, weve expanded our fleet, opened new hubs,
              and innovated our processes to ensure that our clients receive the
              best service possible.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-4">Our Team</h2>
            <p>
              We have a dedicated team of professionals who are passionate about
              logistics and committed to delivering excellence every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
