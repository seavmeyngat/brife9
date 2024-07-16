import prisma from "../prismaClient.js";

// Get all accounts
export const getAllAccounts = async (req, res) => {
  try {
    const accounts = await prisma.account.findMany({
      include: {district: true, province: true}
    });
    res.json(accounts);
  } catch (error) {
    console.error('Error fetching accounts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
