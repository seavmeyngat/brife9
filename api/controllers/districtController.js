import prisma from "../prismaClient.js";

// Get all districts
export const getAllDistricts = async (req, res) => {
  try {
    const { province_id } = req.query;
    let condition = { include: { province: true } };
    province_id ? condition.where = { province_id: Number(province_id) } : condition;

    const districts = await prisma.district.findMany(condition);
    res.json(districts);
  } catch (error) {
    console.error('Error fetching districts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
