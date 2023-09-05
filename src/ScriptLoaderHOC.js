import React, { useEffect } from 'react';

const ScriptLoaderHOC = ({ scriptUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [scriptUrl]);

  return null;
};

export default ScriptLoaderHOC;