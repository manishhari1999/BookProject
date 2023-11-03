import React from "react";
import Navbar from '../../components/layouts/navbar/Navbar';
import DetailsSection from "../../components/layouts/details-section/DetailsSection";


const BookDetails = () => {
    return (
        <section>
           <Navbar darkTheme={ true } />

           <DetailsSection />
      
        </section>
    )
}

export default BookDetails;