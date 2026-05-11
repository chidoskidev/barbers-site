import Gallery from "../models/Gallery.js";

//GET ALL IMAGES
export const getImages = async (req, res) => {
  const gallery = await Gallery.find();
  res.status(200).json(gallery);
};
//UPLOAD IMAGE
export const uploadImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const gallery = await Gallery.create({
      imageUrl,
    });
    if (!gallery) {
      return res.status(400).json({
        success: false,
        message: "Failed to upload image",
      });
    }
    res.status(201).json({
      success: true,
      gallery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//DELETE IMAGE
export const deleteImage = async (req, res) => {
  try {
    const deletedImage = await Gallery.findByIdAndDelete(req.params.id);
    if (!deletedImage) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }
    res.status(204).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
