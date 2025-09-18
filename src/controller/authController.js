const bcrypt = require("bcrypt");
const prisma = require("../utils/prisma");
const jwt = require("jsonwebtoken");

export async function userlogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: "missing field" });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) return res.status(401).json({ message: "Invalid Credential" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credential" });
    const token = jwt.sign(
      { id: user.id, email: user, email },
      process.env.JWT_SECRET,
      { expiresIn: "7h" },
    );
    res.json({
      id: user.id,
      email: user.email,
      token: token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: error.message });
  }
}
export async function userRegister(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(401).json({
      message: "missing field"
    })
    const hashedpassword = await bcrypt.hash(password, 10);
    // create new user 
    const newuser = awit prisma.user.create({
      data: {
        email,
        password: hashedpassword
      }
    })
    // generate token 
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" })
    res.status(201).json({
      user: user.id,
      email: user.email,
      token: token
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "invalid server error" })
  }
}
