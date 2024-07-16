import prisma from "../prismaClient.js";

// Get all districts
export const getAllDistricts = async (req, res) => {
  try {
    const districts = await prisma.district.findMany({
      include: {
        province: true
      }
    });
    res.json(districts);
  } catch (error) {
    console.error('Error fetching districts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
