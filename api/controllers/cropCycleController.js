import prisma from "../prismaClient.js";

// Get all cropCycles
export const getAllCropCycles = async (req, res) => {
  try {
    const cropCycles = await prisma.crop_cycle.findMany();
    res.json(cropCycles);
  } catch (error) {
    console.error('Error fetching cropCycles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
