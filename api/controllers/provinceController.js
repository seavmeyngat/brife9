import prisma from "../prismaClient.js";

// Get all provinces
export const getAllProvinces = async (req, res) => {
  try {
    const provinces = await prisma.province.findMany();
    res.json(provinces);
  } catch (error) {
    console.error('Error fetching provinces:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
