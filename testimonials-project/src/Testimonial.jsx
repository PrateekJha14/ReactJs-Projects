import { useState } from "react"

const Testimonial = () => {

    const[index, setIndex] = useState(0);

    const testimonials = [
        {
            quote : "This is the best product i have ever used",
            author : "Prateek Jha",
        },
        {
            quote : "This is an amazing piece of work",
            author : "Manash Abhivir",
        },
        {
            quote : "I would love to see more of these products",
            author : "Mayank Singh",
        }
    ]

    function handlePrevClick() {
        setIndex((index + testimonials.length-1) % testimonials.length)
    }

    function handleNextClick() {
        setIndex((index + 1) % testimonials.length)
    }

  return (
    <div className="container">
        <div className="quote">
            {testimonials[index].quote}
        </div>
        <div className="author">
            {testimonials[index].author}
        </div>
        <div className="btns">
            <button onClick={handlePrevClick}>
                Previous
            </button>
            <button onClick={handleNextClick}>
                Next
            </button>
        </div>
    </div>
  )
}

export default Testimonial