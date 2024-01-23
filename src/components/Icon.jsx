import React from 'react';

const Icon = ({ icon: IconComponent, className }) => {
  return (
    <div className={className}>
      {IconComponent && <IconComponent className="text-white w-16 h-16" />}
    </div>
  );
};

export default Icon;