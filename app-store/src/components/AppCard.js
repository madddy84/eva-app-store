import React from 'react';
import { FaTag, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AppCard = ({ app }) => {

  const navigate = useNavigate();
  const onClick = (app) => {  
    navigate(`/details/${app.id}`);
  }

  return (
    <div
      key={app.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(app)}
      role="button"
      tabIndex={0}
    >
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={app.icon}
            alt={app.name}
            className="w-16 h-16 rounded-xl object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0";
            }}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
            <p className="text-sm text-gray-600">{app.shortDescription}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {app.tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  <FaTag className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-600 font-semibold">${app.price}/mo</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <span className="ml-1 text-gray-600">{app.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;