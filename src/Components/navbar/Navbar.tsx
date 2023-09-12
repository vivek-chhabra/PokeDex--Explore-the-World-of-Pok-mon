import "./Navbar.scss";
import img from "../../Assets/pokeball.png";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, ease: "linear" },
    },
};

const childVariant = {
    hidden: { opacity: 1, scale: 0.4, y: -30 },
    visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Navbar({}: Props) {
    const [activeNav, setActiveNav] = useState(false)

    return (
        <motion.div className={`Navbar flex ${activeNav && 'active'}`} initial="hidden" whileInView="visible" variants={container} viewport={{ amount: 0.5, once: true }}>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="links flex">
                <NavLink to="/search" className="link flex-col">
                    <motion.div variants={childVariant} className="item">
                        Search
                    </motion.div>
                    <div className="active-bar" style={{ backgroundColor: "" }}></div>
                </NavLink>
                <NavLink to="/compare" className="link">
                    <motion.div variants={childVariant} className="item">
                        Compare
                    </motion.div>
                    <div className="active-bar" style={{ backgroundColor: "" }}></div>
                </NavLink>
                <NavLink to="/pokemon" className="link">
                    <motion.div variants={childVariant} className="item">
                        Pokemon
                    </motion.div>
                    <div className="active-bar" style={{ backgroundColor: "" }}></div>
                </NavLink>
                <NavLink to="/list" className="link">
                    <motion.div variants={childVariant} className="item">
                        My List
                    </motion.div>
                    <div className="active-bar" style={{ backgroundColor: "" }}></div>
                </NavLink>
                <NavLink to="/about" className="link">
                    <motion.div variants={childVariant} className="item">
                        About
                    </motion.div>
                    <div className="active-bar" style={{ backgroundColor: "" }}></div>
                </NavLink>
            </div>
            <i className="fa-solid fa-bars"></i>
        </motion.div>
    );
}
