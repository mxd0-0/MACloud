// src/components/MotionWrap.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => {
    // Give the returned component a name, e.g., "HOC" or "WithMotion"
    const WithMotion = (props) => {
        return (
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
                className={classNames} // Removed the non-existent 'app__flex' class
            >
                {/* Pass down any props to the wrapped component */}
                <Component {...props} />
            </motion.div>
        );
    };

    // This helps in debugging with React DevTools but the key fix is naming the function above
    WithMotion.displayName = `WithMotion(${Component.displayName || Component.name || 'Component'})`;

    return WithMotion;
};

export default MotionWrap;