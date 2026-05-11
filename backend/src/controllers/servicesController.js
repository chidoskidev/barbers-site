import Service from "../models/Service.js";

export const getServices = async (req, res) => {
  const services = await Service.find();
  res.status(200).json(services);
};
export const addService = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;
    const service = await Service.create({
      title,
      description,
      price,
      image,
    });
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Failed to upload image",
      });
    }
    res.status(201).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }
    res.status(204).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
