import "./Contact.css";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
<section id="contact" className="contact" data-aos="fade-left"></section>

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {

    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "5f5974a4-6a6f-4f08-969d-d7f505164d3e"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {

      setResult("Message sent successfully ✅");

      event.target.reset();

    } else {

      setResult("Something went wrong ❌");

    }

  };

  return (

<section
id="contact"
className="contact"
data-aos="fade-up"
>

<div className="contact-header">

<span className="section-tag">
LET'S CONNECT
</span>

<h2 className="section-title">

Let's Build Something
<br />

<span>Amazing Together</span>

</h2>

<p className="contact-subtitle">

I'm actively looking for Software Engineering,
Full Stack Development,
AI and Cloud opportunities.
Whether it's an internship,
apprenticeship or collaboration,
I'd love to connect.

</p>

</div>

<div className="contact-container">

{/* LEFT */}

<div className="contact-info">

<div className="contact-card">

<FaEnvelope className="contact-icon"/>

<div>

<h3>Email</h3>

<a href="mailto:aayushia971@gmail.com">

aayushia971@gmail.com

</a>

</div>

</div>

<div className="contact-card">

<FaLinkedin className="contact-icon"/>

<div>

<h3>LinkedIn</h3>

<a
href="https://www.linkedin.com/in/aayushi-agarwal-961a47333"
target="_blank"
rel="noreferrer"
>

View Profile

</a>

</div>

</div>

<div className="contact-card">

<FaGithub className="contact-icon"/>

<div>

<h3>GitHub</h3>

<a
href="https://github.com/Aayushi-Agarwal123"
target="_blank"
rel="noreferrer"
>

github.com/Aayushi-Agarwal123

</a>

</div>

</div>

<div className="contact-card">

<FaMapMarkerAlt className="contact-icon"/>

<div>

<h3>Location</h3>

<p>India</p>

</div>

</div>

<a
href="/Aayushi_Agarwal_Resume.pdf"
download
className="resume-btn"
>

⬇ Download Resume

</a>

</div>

{/* RIGHT */}

<form
className="contact-form"
onSubmit={onSubmit}
>

<input
type="text"
name="name"
placeholder="Your Name"
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
required
/>

<textarea
rows="6"
name="message"
placeholder="Write your message..."
required
/>

<button type="submit">

Send Message →

</button>

<p className="form-result">

{result}

</p>

</form>

</div>

</section>

  );
}

export default Contact;