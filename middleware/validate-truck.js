module.exports = (req, res, next) => {
  const {
    truck_name,
    food_type,
    truck_image,
    location_lat,
    location_lng
  } = req.body;

  if (
    !truck_name ||
    !food_type ||
    !truck_image ||
    !location_lat ||
    !location_lng
  ) {
    res.status(400).json('Truck details missing');
  }
  next();
};
