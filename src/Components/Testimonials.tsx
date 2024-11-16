import React from 'react';

const testimonials = [
  { name: 'John Doe', feedback: 'Great products and fast delivery!', imageUrl: 'https://z-p3-scontent.fdla3-2.fna.fbcdn.net/o1/v/t0/f1/m338/upload_img_15899588_08_13_2024_12_35_00_607935_4713778995662922325.jpeg?_nc_ht=z-p3-scontent.fdla3-2.fna.fbcdn.net&_nc_cat=104&ccb=9-4&oh=00_AYDJYc2mVbdgZW7Kvp60jVhPuJmKDIcObCJct48ja-8kVw&oe=66BDA09E&_nc_sid=5b3566' },
  { name: 'Jane Smith', feedback: 'Love the variety and quality!', imageUrl: 'https://z-p3-scontent.fdla3-2.fna.fbcdn.net/o1/v/t0/f1/m338/upload_img_15899588_08_13_2024_12_35_00_607935_4713778995662922325.jpeg?_nc_ht=z-p3-scontent.fdla3-2.fna.fbcdn.net&_nc_cat=104&ccb=9-4&oh=00_AYDJYc2mVbdgZW7Kvp60jVhPuJmKDIcObCJct48ja-8kVw&oe=66BDA09E&_nc_sid=5b3566' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="mt-2 text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
