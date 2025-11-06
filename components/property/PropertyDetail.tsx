// components/property/PropertyDetail.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";
import { Star } from "lucide-react";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <p className="text-gray-500 mt-1">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex items-center mt-2">
          <Star size={18} className="text-yellow-500 mr-1" />
          <span>{property.rating}</span>
        </div>
        <p className="text-lg mt-4 font-semibold text-green-600">
          ${property.price} / night
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Amenities</h3>
          <ul className="list-disc list-inside text-gray-700">
            {property.category.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
