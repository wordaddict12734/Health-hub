import { useState, useEffect } from "react";
import JaneSmith from "./images/testimonial-img.png";
import JohnDoe from "./images/tanishaexpo.png";
import RobertBrown from "./images/Untitled-2.png";
import Quote from "./images/qutation.png"; 
const styles = {
  section: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    marginBottom: "30px",
  },
  subHeading: {
    fontFamily: "'Inter', sans-serif",
    color: "#1E0B9B",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "10px",
    letterSpacing: "2px",
  },
  box: {
    backgroundColor: "#d2ceeb",
    padding: "5px 0px",
    },
  heading: {
    fontSize: "46px",
    color: "#013243",
    position: "relative",
    fontFamily: "'Titillium Web', sans-serif",
    fontWeight: "700",
  },
  carouselAndDots: {
    display: "flex", // Align the carousel and dots horizontally
    alignItems: "center", // Vertically align the dots and cards
    justifyContent: "center", // Center the entire content
    gap: "20px", // Add spacing between the carousel and dots
    position: "relative", // Maintain relative positioning for layout
    maxWidth: "800px",
    margin: "0 auto",
  },
  carouselContainer: {
    display: "flex",
    overflow: "hidden", // Ensures the slider is contained
    maxWidth: "900px",
    boxShadow: "20px 20px 60px #919191, -20px -20px 60px #ffffff",
    borderRadius: "5%",
  },
  slider: {
    display: "flex",
    transition: "transform 0.5s ease-in-out", // Smooth sliding effect
  },
  card: {
    flex: "0 0 100%", // Each card takes full width of the container
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
    maxWidth: "100%",
    width: "100%",
    display: "flex", // To align items horizontally
    flexDirection: "row", // Image and content side by side
    alignItems: "flex-start", // Align items at the top
    gap: "20px", // Space between image and text
    position: "relative", 
  },
  img: {
    width: "110px",
    height: "130px",
    marginBottom: "10px",
    borderColor: ""
  },
  content: {
    textAlign: "left", // Align text to the left
  },
  name: {
    fontFamily: "'Titillium Web', sans-serif",
    fontSize: "20px",
    fontWeight: "700",
    margin: "10px 0 5px",
    color: "#013243",
  },
  role: {
    fontFamily: "'Fira Sans', sans- serif",
    fontSize: "14px",
    color: "#1E0B9B",
    marginBottom: "15px",
  },
  feedback: {
    fontSize: "14px",
    color: "#525c7b",
    lineHeight: "1.6",
    textAlign: "justify",
  },
  dotsContainer: {
    display: "flex",
    flexDirection: "column", // Dots stacked vertically
    gap: "10px",
    marginLeft: "20px", // Add spacing to the left of the dots
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  activeDot: {
    backgroundColor: "#1E0B9B",
  },
  quoteImg: {
    position: "absolute",
    top: "40px", // Adjust as needed
    right: "10px",
    width: "40px",
    height: "40px",
    zIndex: 10, // Ensure it is above other elements
  }
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jane Smith",
      role: "Doctor",
      img: JaneSmith,
      feedback:
        "HealthHub has streamlined our hospital operations efficiently. The user interface is intuitive, and the support is excellent! The system has significantly reduced our administrative burden, allowing healthcare professionals to focus more on patient care. Additionally, the seamless integration with our existing systems ensures that everything runs smoothly without any interruptions. It's an invaluable tool for our daily operations.",
    },
    {
      name: "John Doe",
      role: "Patient",
      img: JohnDoe,
      feedback:
        "Booking appointments and accessing my health records has never been easier. HealthHub offers an amazing experience! The platform’s user-friendly interface allows me to quickly schedule visits without the usual back-and-forth with receptionists. I can view my medical history, test results, and prescriptions all in one place, and I get timely reminders for upcoming appointments. It’s reassuring to know I can communicate directly with my healthcare provider and track my progress. HealthHub truly makes managing my health more convenient and stress-free!",
    },
    {
      name: "Robert Brown",
      role: "Admin",
      img: RobertBrown,
      feedback:
        "Managing hospital resources is seamless with HealthHub. It's a must-have for any healthcare institution! The platform simplifies inventory tracking, staff scheduling, and patient management, ensuring that everything operates efficiently. The real-time updates and detailed analytics provide valuable insights, helping administrators make informed decisions. With its user-friendly interface and powerful features, HealthHub has become an essential tool for optimizing hospital operations.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Automatically transition every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  // Slide to the selected testimonial
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
  <div id="testimonial">
    <section style={styles.section}>
      <div style={styles.header}>
        <h3 style={styles.subHeading}>
          <span style={styles.box}>TESTI</span>MONIAL
        </h3>
        <h2 style={styles.heading}>What Our Client’s Say’s</h2>
      </div>
      <div style={styles.carouselAndDots}>
        {/* Carousel */}
        <div style={styles.carouselContainer}>
          <div
            style={{
              ...styles.slider,
              transform: `translateX(-${currentIndex * 100}%)`, // Moves slider
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div style={styles.card} key={index}>
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  style={styles.img}
                />
                <div style={styles.content}>
                  <h3 style={styles.name}>{testimonial.name}</h3>
                  <p style={styles.role}>{testimonial.role}</p>
                  <img
                    src={Quote} // Path to your quotation image
                    alt="Quote"
                    style={styles.quoteImg}
                  />
                  <p style={styles.feedback}>{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                ...(index === currentIndex ? styles.activeDot : {}),
              }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Testimonial;
