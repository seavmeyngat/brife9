import prisma from "../prismaClient.js";

export const getTotalFarmers = async (req, res) => {
  try {
    const totalFarmers = await prisma.farmer.count();
    res.json({ totalFarmers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalFarmlands = async (req, res) => {
  try {
    const totalFarmlands = await prisma.farmland.count();
    res.json({ totalFarmlands });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getActiveCropCycles = async (req, res) => {
  try {
    const activeCropCycles = await prisma.crop_cycle.count({
      where: {
        status: "active",
      },
    });
    res.json({ activeCropCycles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTotalFarmlandSize = async (req, res) => {
  try {
    const totalFarmlandSize = await prisma.farmland.aggregate({
      _sum: {
        size: true,
      },
    });
    res.json({ totalFarmlandSize: totalFarmlandSize._sum.size });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
