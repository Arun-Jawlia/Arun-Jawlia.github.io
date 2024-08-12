import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactUs = () => {
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmission = (e) => {
    e.preventDefault();
    if (data.name && data.email && data.subject && data.message) {
      emailjs
        // .send("service_po6idda", "template_g5erg0q", data, "Ob6YgTaYqeObolMjc")
        .then((response) => {
          setSubmit(true);
        })
        .catch((error) => {
          setSubmit(false);
        });
    }
  };

  useEffect(() => {
    let id = setInterval(() => {
      setSubmit(false);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [submit]);

  return (
    <Container id="contact">
      <h1 className="sectionHeading">Contact Me</h1>
      <Content>
        <ContactInfo className="contactText">
          <InfoItem>
            <StyledIcon>
              <LinkedInIcon fontSize="large" />
            </StyledIcon>
            <div>
              <h2>
                {/* LinkedIn{" "} */}
                <a
                  href="https://www.linkedin.com/in/arunjawlia"
                  rel="noreferrer"
                  target="_blank"
                >
                  Arun Jawlia
                </a>
              </h2>
            </div>
          </InfoItem>

          <InfoItem>
            <StyledIcon>
              <PhoneIcon fontSize="large" />
            </StyledIcon>
            <div>
              <h2>
                {/* Phone{" "} */}
                <a href="tel:+919718653508" rel="noreferrer" target="_blank">
                  9718653508
                </a>
              </h2>
            </div>
          </InfoItem>

          <InfoItem>
            <StyledIcon>
              <EmailIcon fontSize="large" />
            </StyledIcon>
            <div>
              <h2>
                {/* Email{" "} */}
                <a
                  href="mailto:arunkumar08.mk@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  arunkumar08.mk@gmail.com
                </a>
              </h2>
            </div>
          </InfoItem>

          <InfoItem>
            <StyledIcon>
              <LocationOnIcon fontSize="large" />
            </StyledIcon>
            <div>
              <h2>
                {/* Location{" "} */}
                <a
                  href="https://www.google.com/maps/place/Veerbhadra,+Uttarakhand/@30.0479292,78.4212561,11.16z/data=!4m5!3m4!1s0x39093e1730e30441:0x7aceaa46b9f267fe!8m2!3d30.0771701!4d78.2874772"
                  rel="noreferrer"
                  target="_blank"
                >
                  New Delhi, Delhi
                </a>
              </h2>
            </div>
          </InfoItem>
        </ContactInfo>
        <Form onSubmit={handleSubmission}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={submit ? "" : data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={submit ? "" : data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={submit ? "" : data.subject}
            onChange={(e) => setData({ ...data, subject: e.target.value })}
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={submit ? "" : data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 1rem;
  color: #333;
background: linear-gradient(135deg, #f3f3f3, #e6e6e6);

`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;



const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  
  @media only screen and (min-width: 320px) and (max-width: 768px)
  {
  
    width: 100%;
    
    
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 1rem;
  &:focus {
    border-color: #088395;
    outline: none;
  }
  
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 1rem;
  resize: vertical;
  height: 150px;
  &:focus {
    border-color: #088395;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #088395;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #088395;
  }
`;

const ContactInfo = styled.div`
  width: 50%;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 10px;
  margin:auto;
  display:flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;

  
  @media only screen and (min-width: 320px) and (max-width: 768px)
  {
    width: 90%;
    margin:'auto';
    padding:0rem;
    
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #088395;
    margin: auto;
  }

  a {
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    margin-left: 10px;
    transition: color 0.3s;
  }

  a:hover {
    color: #088395;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px)
  {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

`;

const StyledIcon = styled.div`
  color: #088395;
  margin-right: 20px;
  margin: auto;
`;

export default ContactUs;
