
import React, { useState } from 'react';


  const ContactHome: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/submit_form.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      alert(result.message);

      if (result.success) {
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <section className='min-h-screen bg-black pt-14'>
      <h1 className="text-[60px] sm:text-[120px] mx-[20px] sm:[100px] lg:mx-[200px] font-bold leading-none">Contact Us</h1>
      <div className="  text-white flex flex-col px-4 py-6 justify-center items-center">
        
      <div className="flex flex-col md:flex-row justify-center items-start gap-16 mt-10 w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <button className="flex items-center gap-2 bg-[#1c1c1c] px-4 py-2 rounded-full text-sm border border-white">
            <span className="h-2 w-2 bg-green-400 rounded-full"></span>
            BOOK A CALL
          </button>
          <h2 className="text-4xl md:text-5xl font-semibold">
            I'd love to hear<br />from you!
          </h2>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-1/2">
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <input
              id="name"
              placeholder='Enter Your Name'
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => {
                // Sirf alphabets aur space allow karega
                e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                handleChange(e);
              }}
              className="bg-[#1c1c1c] border-2 border-transparent hover:border-2 hover:border-green-400 rounded-md px-4 py-3 outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
            <input
              id="email"
              name='email'
              placeholder='xyz@gmail.com'
              value={formData.email}
              type="email"
               onChange={handleChange}
              className="bg-[#1c1c1c] border-2 border-transparent hover:border-2 hover:border-green-400 rounded-md px-4 py-3 outline-none"
              required
            />
          </div>

           <div className="flex flex-col gap-1">
             <label className="text-sm" htmlFor="mobile">Mobile Number <span className="text-red-500">*</span></label>
             <div className="flex">
               <span className="bg-green-400 text-white border-2 border-transparent rounded-l-md px-4 py-3 flex items-center">+91</span>
               <input
                id="mobile"
                name="phone"
                type="tel"
                
                value={formData.phone}
                onChange={(e) => {
                 e.target.value = e.target.value.replace(/[^0-9]/g, '');
                 handleChange(e);
                }}
                maxLength={10}
                className="text-white border-2 border-transparent hover:border-green-400 rounded-r-md px-4 py-3 outline-none w-full"
                placeholder="Enter 10-digit number"
                required
                />
           
             </div>
           </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="description">Description</label>
            <textarea
              id="description"
              rows={5}
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="bg-[#1c1c1c] border-2 border-transparent hover:border-2 hover:border-green-400 rounded-md px-4 py-3 outline-none resize-none"
            ></textarea>
          </div>

          <button
              type="submit"
              disabled={loading}
              className="hover:bg-green-400 text-white hover:text-black border-2 border-white font-bold cursor-pointer py-2 rounded-full w-24 disabled:opacity-50 transition ease-in"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default ContactHome;
