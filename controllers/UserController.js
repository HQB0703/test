const User = require("../model/User");

const UserController = {
    sigup: async (req, res) => {
        try {
            const { name, email, password, dayOfBirth } = req.body;
            
            // Check if email already exists in the database
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "Email already exists" });
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: "Invalid email format" });
            }
            
            // Password validation
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                return res.status(400).json({ message: "Invalid password format" });
            }
            
            const newUser = new User({ name, email, password, dayOfBirth });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
        sigin: async (req, res) => {
            try {
                const { email, password } = req.body;

                // Check if email and password match in the database
                const existingUser = await User.findOne({ email, password });
                if (!existingUser) {
                    return res.status(401).json({ message: "Invalid email or password" });
                }

                // Allow access if email and password are correct
                res.status(200).json({ message: "Access granted" });
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        },
    };


module.exports = UserController;