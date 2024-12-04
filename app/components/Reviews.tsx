import Image from 'next/image'

const reviews = [
  { id: 1, name: 'John D.', text: 'Great service! Fixed my refrigerator in no time.', rating: 5 },
  { id: 2, name: 'Sarah M.', text: 'Prompt and professional. Highly recommended!', rating: 5 },
  { id: 3, name: 'Mike R.', text: 'Fair pricing and excellent work on my dishwasher.', rating: 4 },
]

const Reviews = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {review.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Image src="/yelp-logo.png" alt="Yelp" width={100} height={50} />
          <Image src="/trustpilot-logo.png" alt="Trustpilot" width={100} height={50} />
        </div>
      </div>
    </div>
  )
}

export default Reviews

