import React from 'react';
import { motion, AnimatePresence} from 'framer-motion';

function NotFound({ notFound}) {
    return (
        <AnimatePresence>
            { notFound && (
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity:0}}
                className="city">
                <h2 className="city-title">Unable to find Location</h2>
                <p>Please try again</p>
            </motion.div>
            )}
        </AnimatePresence>
    )
}

export default NotFound
