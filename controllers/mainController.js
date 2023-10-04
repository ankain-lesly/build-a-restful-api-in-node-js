// Default Controller

const Home = (req, res) => {
  res.status(200).json({ message: "Home Page Info" });
};
const About = (req, res) => {
  res.status(200).json({ message: "About Page Info" });
};

module.exports = {
  Home,
  About,
};
