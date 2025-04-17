"use client"
export default function Contact() {
    const handleSubmit = (e:any) => {
      e.preventDefault();
      // Add form submission logic (e.g., API call)
      alert("Form submitted!");
    };
  
    return (
      <section className="py-12">
        <div className="visme_d" data-title="Simple Animated Contact Form" data-url="g7d0vxp0-simple-animated-contact-form?sidebar=true" data-domain="forms" data-full-page="false" data-min-height="600px" data-form-id="114740"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
      </section>
    );
  }