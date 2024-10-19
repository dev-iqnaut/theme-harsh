import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/Firebase";

const useInfrastructureData = () => {
  const [infrastructure, setInfrastructure] = useState({
    art_rooms: [],
    assembly_area: [],
    auditorium: [],
    clinic: [],
    hostels: [],
    laboratories: [],
    libraries: [],
    presentation_halls: [],
    school_blocks: [],
    school_reception: [],
    sports_ground: []
  });

  // Fetch infrastructure data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const infrastructureData = doc.data()?.siteData?.Infrastructure || {};
        setInfrastructure(infrastructureData);
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return infrastructure;
};

export default useInfrastructureData;
