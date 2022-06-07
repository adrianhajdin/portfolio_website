import ImageGallery from "react-image-gallery";
import { jsx, Image, Box, Heading, Text } from "theme-ui";
import { useMemo } from "react";
import Media from "react-media";
import { Fragment } from "react";

const Carousal = ({ images }) => {
  const imagesWithThumbnail = images.map((image) => {
    return { original: image, thumbnail: image };
  });

  const galleryProps = useMemo(
    () => ({
      showBullets: true,
      showThumbnails: true,
      thumbnailPosition: "bottom",
      infinite: true,
      showFullscreenButton: false,
      zoom: false,
      autoPlay: false,
      showPlayButton: false,
      showNav: true,
      showIndex: false,
      slideOnThumbnailOver: false,
      slideInterval: 3000,
      slideDuration: 300,
      items: imagesWithThumbnail,
      renderItem: (...args) => {
        return args.map((a) => (
          <Box sx={styles.imageBox}>
            <Image src={a.original} sx={styles.img} />
          </Box>
        ));
      },
    }),
    []
  );
  return (
    <Media
      queries={{
        small: "(max-width: 600px)",
        medium: "(min-width: 600px)"
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.small && <ImageGallery {...galleryProps} />}
          {matches.medium && <ImageGallery {...galleryProps} thumbnailPosition="left"/>}
        </Fragment>
      )}
    </Media>
  );
  // return <ImageGallery {...galleryProps} />;
};

const styles = {
  imageBox: {
    height: ["200px", "200px", null ,"200px"],
    width: "100%",
  },
  img: {
    mb: 4,
    width: ["100%", null, null, "100%", null, "100%"],
    objectFit: "cover",
    height: "100%",
  },
};

export default Carousal;
