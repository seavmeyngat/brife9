import prisma from "../prismaClient.js";

// Get all farmlands
export const getAllFarmlands = async (req, res) => {
  try {
    const farmlands = await prisma.farmland.findMany();
    res.json(farmlands);
  } catch (error) {
    console.error('Error fetching farmlands:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get farmland by ID
export const getFarmlandById = async (req, res) => {
  const { id } = req.params;
  try {
    const farmland = await prisma.farmland.findUnique({
      where: { id: parseInt(id) },
    });
    if (!farmland) {
      return res.status(404).json({ error: 'Farmland not found' });
    }
    res.json(farmland);
  } catch (error) {
    console.error('Error fetching farmland:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add new farmland
export const addFarmland = async (req, res) => {
  const { idCard, firstName, lastName, gender, source, registeredBy, provinceId } = req.body;
  try {
    const newFarmland = await prisma.farmland.create({
      data: {
        idCard,
        firstName,
        lastName,
        gender,
        source,
        registeredBy,
        province: { connect: { id: parseInt(provinceId) } },
      },
    });
    res.status(201).json(newFarmland);
  } catch (error) {
    console.error('Error adding farmland:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update farmland
export const updateFarmland = async (req, res) => {
  const { id } = req.params;
  const { idCard, firstName, lastName, gender, source, registeredBy, provinceId } = req.body;
  try {
    const updatedFarmland = await prisma.farmland.update({
      where: { id: parseInt(id) },
      data: {
        idCard,
        firstName,
        lastName,
        gender,
        source,
        registeredBy,
        province: { connect: { id: parseInt(provinceId) } },
      },
    });
    res.json(updatedFarmland);
  } catch (error) {
    console.error('Error updating farmland:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete farmland
export const deleteFarmland = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.farmland.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Farmland deleted successfully' });
  } catch (error) {
    console.error('Error deleting farmland:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
