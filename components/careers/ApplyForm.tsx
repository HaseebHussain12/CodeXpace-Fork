'use client';

import { useState, useRef } from 'react';

interface ApplyFormProps {
  jobTitle: string;
}

export default function ApplyForm({ jobTitle }: ApplyFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    job_posting: jobTitle,
    source: '',
    expected_salary: '',
    message: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [resumeFileName, setResumeFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
      setResumeFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally submit to the API
    // For now, we'll just log the data
    console.log('Form Data:', formData);
    console.log('Resume:', resume);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Application submitted successfully! (This is a UI demo - API integration pending)');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        job_posting: jobTitle,
        source: '',
        expected_salary: '',
        message: '',
      });
      setResume(null);
      setResumeFileName('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 1000);
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Apply for <span className="text-red-400">{jobTitle}</span>
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-1 focus:ring-red-500/50 transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-1 focus:ring-red-500/50 transition-all"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-1 focus:ring-red-500/50 transition-all"
            placeholder="+1234567890"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
            Address <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-1 focus:ring-red-500/50 transition-all"
            placeholder="123 Developer Lane, Code City"
          />
        </div>

        {/* Job Posting (Pre-filled) */}
        <div>
          <label htmlFor="job_posting" className="block text-sm font-medium text-gray-300 mb-2">
            Job Posting <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="job_posting"
            name="job_posting"
            value={formData.job_posting}
            readOnly
            className="w-full px-4 py-3 bg-black/60 border border-red-500/30 rounded-lg text-gray-400 cursor-not-allowed"
          />
        </div>

        {/* Source */}
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-300 mb-2">
            How did you hear about us? <span className="text-red-400">*</span>
          </label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500/70 focus:ring-1 focus:ring-red-500/50 transition-all"
          >
            <option value="">Select a source</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Indeed">Indeed</option>
            <option value="Company Website">Company Website</option>
            <option value="Referral">Referral</option>
            <option value="Job Board">Job Board</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Expected Salary */}
        <div>
          <label htmlFor="expected_salary" className="block text-sm font-medium text-gray-300 mb-2">
            Expected Salary <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="expected_salary"
            name="expected_salary"
            value={formData.expected_salary}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-1 focus:ring-red-500/50 transition-all"
            placeholder="80,000 - 100,000 USD"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Cover Letter / Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500/70 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
            placeholder="Tell us about yourself and why you're interested in this position..."
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Resume / CV <span className="text-red-400">*</span>
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
            required
          />
          <div
            onClick={handleFileClick}
            className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg cursor-pointer hover:border-red-500/70 transition-all flex items-center justify-between"
          >
            <span className={`text-sm ${resumeFileName ? 'text-white' : 'text-gray-500'}`}>
              {resumeFileName || 'Click to upload resume (PDF, DOC, DOCX)'}
            </span>
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          {resumeFileName && (
            <p className="mt-2 text-sm text-gray-400 flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{resumeFileName}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02] transform uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </span>
            ) : (
              'Submit Application'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}


