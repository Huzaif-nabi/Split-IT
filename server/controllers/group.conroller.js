import Group from '../models/group.model.js';

export const addGroup = async (req, res) => {
  try {
    const { name, description, members, when, currency } = req.body;

    const existingGroup = await Group.findOne({ name });

    if (existingGroup) {
      return res.status(409).json({ 
        message: "Group name already exists"
      });
    }

    const group = new Group({ name, description, members, when, currency });
    await group.save();

    return res.status(201).json({ 
      message: "Group created successfully",
      group
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
      message: error.message
    });
  }
};
