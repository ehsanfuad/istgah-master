import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import { Box } from "@mui/material";

function LazyImage({ imageUrl, width, height }) {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  const handleLoadStarted = () => {
    setLoadStarted(true);
  };

  return (
    <Box position="relative" borderRadius={2}>
      <LazyLoadImage
        key={imageUrl}
        src={imageUrl}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
        width={width}
        height={height}
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <Box position="absolute" top={0} left={0}>
          <Blurhash
            hash="L1O|b2-;fQ-;_3fQfQfQfQfQfQfQ"
            resolutionX={32}
            resolutionY={32}
            punch={1}
            width={width}
            height={height}
          />
        </Box>
        // </LazyLoadComponent>
      )}
    </Box>
  );
}

export default LazyImage;
