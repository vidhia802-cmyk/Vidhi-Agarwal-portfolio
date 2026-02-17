
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Review } from '../types';

const Contact: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewName, setReviewName] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [geminiAnalysis, setGeminiAnalysis] = useState<string | null>(null);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewContent) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: reviewName,
      content: reviewContent,
      date: new Date().toLocaleDateString()
    };

    setReviews(prev => [newReview, ...prev]);
    setReviewName('');
    setReviewContent('');
    setIsSubmitting(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `A user named ${newReview.name} left a review on Vidhi Agarwal's portfolio: "${newReview.content}". 
                   Act as Vidhi's personal assistant. Provide a super short, elegant, and aesthetic 'thank you' response that mentions coffee or curiosity.`
      });
      setGeminiAnalysis(response.text || "Thank you for the kind words!");
    } catch (error) {
      setGeminiAnalysis("Thanks for your review! Let's grab that coffee sometime.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
        <section className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-6xl font-serif italic leading-none">Let's grab a coffee.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
              Whether you have a project in mind or just want to discuss the finer points of design and caffeine, my inbox is always open.
            </p>
          </div>

          <div className="space-y-10">
            <div className="group">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2">Digital Post</p>
              <a href="mailto:vidhi.agarwal@uid.edu.in" className="text-2xl font-serif italic hover:pl-4 transition-all duration-500 block">
                vidhi.agarwal@uid.edu.in
              </a>
            </div>
            <div className="group">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-2">Social Domain</p>
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-xl font-serif italic hover:pl-4 transition-all duration-500">Instagram — @vidhi.designs</a>
                <a href="#" className="text-xl font-serif italic hover:pl-4 transition-all duration-500">Behance — vidhiagarwal</a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100">
             <p className="text-xs text-gray-400 italic">"Design is a conversation between the eye and the heart."</p>
          </div>
        </section>

        <section className="relative">
          <div className="bg-gray-50 p-10 md:p-14 border border-gray-100 relative z-10">
            <h3 className="text-3xl font-serif italic mb-10">Guestbook</h3>
            <form onSubmit={handleSubmitReview} className="space-y-8">
              <div className="relative group">
                <input 
                  type="text" 
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="Your Name"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-focus-within:w-full"></span>
              </div>
              <div className="relative group">
                <textarea 
                  rows={3}
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Leave a thought..."
                ></textarea>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-500 group-focus-within:w-full"></span>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black pb-1 hover:pb-2 transition-all disabled:opacity-30"
              >
                {isSubmitting ? 'Submitting...' : 'Sign Guestbook'}
              </button>
            </form>

            {geminiAnalysis && (
              <div className="mt-10 p-6 bg-white border border-gray-100 rounded-sm animate-pulse">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Automated Reply</p>
                <p className="text-sm italic font-serif text-gray-600 leading-relaxed">"{geminiAnalysis}"</p>
              </div>
            )}

            <div className="mt-16 space-y-8 h-[300px] overflow-y-auto pr-4 scrollbar-hide">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold sticky top-0 bg-gray-50 py-2">Archive</h4>
              {reviews.length === 0 ? (
                <p className="text-gray-300 text-sm italic font-serif">The guestbook is currently empty...</p>
              ) : (
                reviews.map(review => (
                  <div key={review.id} className="space-y-2 border-b border-gray-100 pb-6 group">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">{review.name}</p>
                      <span className="text-[10px] text-gray-300 uppercase tracking-widest">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-light italic">"{review.content}"</p>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* Decorative back-element */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-gray-100 -z-0"></div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
