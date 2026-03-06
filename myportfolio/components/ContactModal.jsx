import { useState, useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [showModal, setShowModal] = useState(isOpen);
  const [fadeClass, setFadeClass] = useState("opacity-0 scale-90");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setFadeClass("opacity-100 scale-100"), 50);
    } else {
      setFadeClass("opacity-0 scale-90");
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (formData.message.trim().length < 40) {
    alert("Message must be at least 40 characters.");
    return;
  }
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
    } else {
      alert("Failed to send email. Try again later.");
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div
        className={`bg-[#121212] text-white rounded-xl shadow-[0_0_20px_#00ADB5] p-6 w-80  transform transition-all duration-300 ${fadeClass}`}
        style={{
    border: "2px solid white",
    boxShadow: "0 0 10px #ffffff, 0 0 20px #ffffff88",
    backgroundColor: "rgba(0,0,0,0.2)",
  }}
      >
        <h2 className="text-xl font-bold mb-3 text-center text-[#00ADB5]">
          {success ? "Thank you!" : "Contact Me"}
        </h2>

        {success ? (
          <div className="flex flex-col items-center justify-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#00ADB5] text-white text-3xl shadow-[0_0_20px_#00ADB5]">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-[#00ADB5]">Message sent successfully!</h3>
            <p className="text-gray-400 text-sm text-center">I'll get back to you soon.</p>
            <button
onClick={() => {
    setSuccess(false);      
    setFormData({ name: "", email: "", message: "" }); 
    onClose();             
  }}
  className="bg-[#00ADB5] hover:bg-[#00FFC8] text-white px-4 py-2 rounded-md text-sm transition"
>
  Close
</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
               autoComplete="name"
                 pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                 title="Please use only letters and spaces"
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:border-[#00ADB5] text-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:border-[#00ADB5] text-sm"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              autoComplete="off"
              onInvalid={(e) => e.target.setCustomValidity("Message must be at least 40 characters")}
onInput={(e) => e.target.setCustomValidity("")}
                title="Message must be at least 40 characters"
              rows="3"
              onChange={handleChange}
              className="w-full bg-transparent border border-gray-600 text-white p-2 rounded-md focus:outline-none focus:border-[#00ADB5] text-sm"
              required
            ></textarea>

           <div className="flex justify-center gap-4">
  <button
    type="button"
    onClick={onClose}
    className="w-24 h-10 bg-gray-600 hover:bg-gray-500 rounded-md text-sm font-semibold text-white transition"
  >
    Cancel
  </button>
  <button
    type="submit"
    disabled={loading}
    className="w-24 h-10 bg-[#00ADB5] hover:bg-[#00FFC8] rounded-md text-sm font-semibold text-white transition flex items-center justify-center"
  >
    {loading ? (
      <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
    ) : (
      "Send"
    )}
  </button>
</div>

          </form>
        )}
      </div>
    </div>
  );
}
