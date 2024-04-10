import React from 'react';

const MapLocation = () => {
  const iframeStyle = {
    borderRadius: '20px',
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '20px' }}>
      <iframe
        title="Map Location"
        width="430"
        height="430"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.4415291682076!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR_PLACE_NAME!2sYOUR_PLACE_NAME!5e0!3m2!1sen!2sus!4v1617639406805!5m2!1sen!2sus"
        allowtransparency="true"
        style={iframeStyle}
      ></iframe>
    </div>
  );
};

export default MapLocation;
