import prisma from "../prismaClient.js";

// Get all cropCycles
export const getAllCropCycles = async (req, res) => {
  try {
    const { status } = req.query;
    let condition = {};
    status ? condition.where = { status: status } : condition;
    const cropCycles = await prisma.crop_cycle.findMany(condition);

    res.json(cropCycles);
  } catch (error) {
    console.error('Error fetching cropCycles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
