import prisma from "../prismaClient.js";

// Get all farmers
export const getAllFarmers = async (req, res) => {
  try {
    const { district_id, province_id } = req.query;

    let districts = [];

    let condition = { include: { district: true, account: true } };

    if (province_id) {
      districts = await prisma.district.findMany({
        where: {province_id: Number(province_id)},
        select: {
          id: true
        }
      });

      districts = districts.map(d => d.id);
    }

    if (district_id) {
      districts = [Number(district_id)];
    }

    districts.length ? condition.where = { district_id: {in: districts} } : condition;

    const farmers = await prisma.farmer.findMany(condition);
    res.json(farmers);
  } catch (error) {
    console.error('Error fetching farmers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get farmer by ID
export const getFarmerById = async (req, res) => {
  const { id } = req.params;
  try {
    const farmer = await prisma.farmer.findUnique({
      where: { id: parseInt(id) },
      include: {district: true, account: true}
    });
    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    res.json(farmer);
  } catch (error) {
    console.error('Error fetching farmer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add new farmer
export const addFarmer = async (req, res) => {
  const { id_card, first_name, last_name, gender, phone, source, registered_by, district_id } = req.body;
  try {
    const newFarmer = await prisma.farmer.create({
      data: {
        id_card,
        first_name,
        last_name,
        gender,
        phone,
        source,
        account: {connect: { id: parseInt(registered_by)}},
        district: { connect: { id: parseInt(district_id) } },
      },
    });
    res.status(201).json(newFarmer);
  } catch (error) {
    console.error('Error adding farmer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update farmer
export const updateFarmer = async (req, res) => {
  const { id } = req.params;
  const { id_card, first_name, last_name, gender, phone, source, registered_by, district_id } = req.body;
  try {
    const updatedFarmer = await prisma.farmer.update({
      where: { id: parseInt(id) },
      data: {
        id_card,
        first_name,
        last_name,
        gender,
        phone,
        source,
        account: {connect: { id: parseInt(registered_by)}},
        district: { connect: { id: parseInt(district_id) } },
      },
    });
    res.json(updatedFarmer);
  } catch (error) {
    console.error('Error updating farmer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete farmer
export const deleteFarmer = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.farmer.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Farmer deleted successfully' });
  } catch (error) {
    console.error('Error deleting farmer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
