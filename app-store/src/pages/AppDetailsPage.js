import React, { useEffect, useState } from 'react';
import { FaStar, FaTag, FaUserCircle } from 'react-icons/fa';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getAppById } from '../services/appDataService';

const AppDetails = (props) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [app, setApp] = useState(null);
  const param = useParams();

  useEffect(() => {
    getAppById(param.appId).then((data) => {    
      console.log('data', data);
      
      setApp(data);
    });
  }, []);


  if(!app) {  
    return <div>Loading...</div>;
  }


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium"> ← Back to Apps</Link>
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <div className="flex items-start space-x-6">
          <img
            src={app.icon}
            alt={app.name}
            className="w-32 h-32 rounded-xl object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0";
            }}
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{app.name}</h2>
            <p className="text-gray-600 mt-2">{app.developer}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400" />
              <span className="ml-1 text-gray-600">{app.rating}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {app.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  <FaTag className="mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-2 px-4 ${activeTab === "overview" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("documentation")}
            className={`pb-2 px-4 ${activeTab === "documentation" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
          >
            Documentation
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`pb-2 px-4 ${activeTab === "faq" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 px-4 ${activeTab === "reviews" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
          >
            Reviews
          </button>
        </div>

        <div className="mt-6">
          {activeTab === "overview" && (
            <>
              <p className="text-gray-700">{app.fullDescription}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">${app.price}/mo</span>
                <button
                  onClick={() => 1+1}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
            </>
          )}

          {activeTab === "documentation" && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {app.documentation.map((doc, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.section}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                        <a href={doc.url}>View</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="space-y-4">
              {app.faq.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {app.reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <FaUserCircle className="text-gray-400 text-2xl mr-2" />
                      <span className="font-semibold text-gray-800">{review.user}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}                      
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;